const connection = require("../../database/connection");

module.exports = {
    create: async (request, response) => {
        try {
            await connection("incidents").insert({
                ...request.body,
                ong_id: request.headers.ong_id
            });
            response.json(await connection("incidents").orderBy("id", "desc").first(), 201);
        } catch (ex) {
            response.json({ exeption: ex.message }, 500);
        }
    },

    get: async (request, response) => {
        const { page = 1 } = request.query;
        const incidents = await connection("incidents").limit(5).join("ongs", "ongs.id", "incidents.ong_id").offset((page - 1) * 5).select(['incidents.*', "ongs.name"]).orderBy("id", "asc");
        const [count] = await connection("incidents").count();
        response.header("X-Total-Count", count[""]);
        response.header("X-Page", page);
        return response.json({ incidents });
    },

    getOne: async (request, response) =>
        response.json(await connection("incidents").where("incidents.id", request.params.id).select(["incidents.id", "incidents.title", "incidents.description", "incidents.value", "ongs.name as ong"]).first().join('ongs', 'ongs.id', 'incidents.ong_id')),

    delete: async (request, response) => {
        try {
            const { id } = request.params;
            const incident = await connection("incidents").where("id", id).where("ong_id", request.headers.ong_id).first();
            console.log("Infos", id, incident);
            if (incident) await connection("incidents").where("id", id).delete();
            else return response.status(401).send();
            return response.status(204).send();
        } catch (error) {
            return response.json(error.message, 500);
        }
    }
}