const axios = require("axios");

exports.readDispositivo = async (req, res) => {
    try {
        const { identificador_balanca } = req.params;

        const response = await axios.get(`http://raspberrypi-${identificador_balanca}.local:5002/raspberry/serial`);

        res.status(200).send({
            retorno: {
                status: 200,
                mensagem: 'Consulta realizado com sucesso.'
            },
            registros: response.data
        });
    } catch (error) {
        console.log(error);

        res.status(500).send({
            retorno: {
                status: 500,
                mensagem: 'Erro ao realizar consulta, tente novamente.'
            },
            registros: []
        });
    }
}