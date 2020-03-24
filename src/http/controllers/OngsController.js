const connection = require("../../database/connection");

module.exports = {

    create: async (request, response) => {
        try {

            await connection("ongs").insert({
                ...request.body
            });

            const { id, email } = await connection("ongs").orderBy("id", "desc").first();

            return response.json({
                event: "Omnistack 11.0",
                user: "Augusto Pereira",
                login: `${id}.${email}`
            });

        } catch (ex) {
            return response.json({ error: ex.message.split(" - ")[1] }, 500)
        }


    },

    get: async (request, response) =>
        response.json(await connection("ongs").select(["id", "name", "phone", "email", "city", "uf"])),

    getIncidents: async (request, response) => {
        const { ong_id } = request.params;
        return response.json(await connection("incidents").where("ong_id", ong_id).select());
    },

    getOne: async (request, response) => {
        const { id } = request.body;

        const ong = await connection("ongs").whereRaw(`concat(ongs.id, '.', ongs.email) = '${id}'`).first();
        if (ong) {
            const incidents = await connection("incidents").where("ong_id", ong.id).select();
            return response.json({ ong, incidents }, 200);
        }

        return response.status(403).send();
    }

}