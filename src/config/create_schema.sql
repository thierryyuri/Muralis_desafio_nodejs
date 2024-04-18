use muralis;

CREATE TABLE tipos_pagamento (
	id int unsigned not null auto_increment,
	tipo varchar(200),
    primary key (id)
);

CREATE TABLE categorias (
	id int unsigned not null auto_increment,
    nome varchar(200),
    descricao varchar(500),
    primary key (id)
);

CREATE TABLE despesas (
	id int unsigned not null auto_increment,
    valor double,
    data_compra datetime,
    descricao varchar(500),
    tipo_pagamento_id int unsigned,
    categoria_id int unsigned,
    primary key (id),
    foreign key (tipo_pagamento_id) references tipos_pagamento(id),
    foreign key (categoria_id) references categorias(id)
);

INSERT INTO tipos_pagamento (tipo) VALUES ('Dinheiro');
INSERT INTO tipos_pagamento (tipo) VALUES ('Debito');
INSERT INTO tipos_pagamento (tipo) VALUES ('Credito');
INSERT INTO tipos_pagamento (tipo) VALUES ('Pix');