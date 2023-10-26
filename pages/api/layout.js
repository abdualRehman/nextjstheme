
import { connect } from "../../utils/dbconfig/dbconfig";
import SettingConfigs from "../../utils/models/configModel";

connect()


export default async function handler(req, res) {
    if (req.method === "POST") {
        try {
            const reqBody = await req.body;
            const { id } = reqBody;
            if (id) {
                const settings = await SettingConfigs.findById(id);

                const response = {
                    success: true,
                    query: id,
                    config: settings,
                };

                return res.status(200).json(response);
            } else {
                const response = {
                    success: true,
                    query: id,
                    config: {},
                };
                return res.status(200).json(response);
            }
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    } else {
        return res.status(405).json({ error: "Method Not Allowed" });
    }
}


