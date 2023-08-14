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
    { email: "cliente1@exemplo.com", aceite: true },
    { email: "cliente2@exemplo.com", aceite: false },
    { email: "cliente3@exemplo.com", aceite: true },
    { email: "cliente4@exemplo.com", aceite: false },

];

const verificaDiaDaSemana = () => {
    const now = new Date();
    const diaDaSemana = now.getDay();
    return diaDaSemana === 1;
};

const montaCorpoDoEmail = (cliente) => {

    const corpo = `
      Olá, ${cliente.email}!
      
      Confira as novidades da CarStore para esta semana:
      - Novos veículos em destaque
      - Os modelos mais vendidos
      - Condições especiais para aquisição
      
      Visite nossa loja e descubra mais opções incríveis!
      
      Atenciosamente,
      A Equipe CarStore
    `;

    return corpo;
};

const enviarEmailsParaClientes = () => {
    if (!verificaDiaDaSemana()) {
        console.log("Hoje não é segunda-feira. Nenhum e-mail será enviado.");
        return;
    }

    clientes.forEach(cliente => {
        if (cliente.aceite) {
            const corpoEmail = montaCorpoDoEmail(cliente);
            const resultado = enviarEmail(cliente.email, "Novidades da CarStore", corpoEmail);
            console.log(resultado);
        }
    });
};


enviarEmailsParaClientes();
