const enviarEmail = (addressee, subject, body) => {
    if (!addressee)
        return "Um destinatário precisa ser fornecido ao enviar um e-mail.";
    if (!subject)
        return "O campo de assunto não deveria estar vazio ao enviar um e-mail.";
    if (!body)
        return "O corpo da mensagem precisa ser fornecido ao enviar um e-mail.";

    console.log(`
            De: news@carstore.com
            Para: ${addressee}
            Assunto: ${subject}
            
            ${body}
            CarStore - Aqui você encontra o seu carro novo
        `);

    return "E-mail enviado com sucesso!";

};


const clientes = [
    { email: "José@exemplo.com", aceite: true },
    { email: "Vanessa@exemplo.com", aceite: false },
    { email: "Juquinha@exemplo.com", aceite: true },
    { email: "Claudia@exemplo.com", aceite: false },

];

const diaDaSemana = () => {
    const now = new Date();
    const diaDaSemana = 1
    return diaDaSemana === 1;
};

const bodyEmail = (cliente) => {

    const body = `
      Olá, ${cliente.email}!
      
      Confira as nossas novidades:

      - Novos veículos em destaque
      - Os modelos mais vendidos
      - Taxa de juros acessiveis
      
      
      Atenciosamente,
      CarStore
      
    `;

    return body;
};

const sendEmail = () => {
    if (!diaDaSemana()) {
        console.log("Hoje não é segunda-feira. Nenhum e-mail será enviado.");
        return;
    }

    clientes.forEach(cliente => {
        if (cliente.aceite) {
            const corpoEmail = bodyEmail(cliente);
            const resultado = enviarEmail(cliente.email, "Novidades da CarStore", corpoEmail);
            console.log(resultado);
            console.log("=======================================================================")
        }
    });
};


sendEmail();
