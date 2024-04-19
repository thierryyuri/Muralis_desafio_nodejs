USE crud;
CREATE TABLE tipos_pagamento
(
	id int unsigned not null auto_increment,
    tipo varchar(300),
    primary key (id)
);	

CREATE TABLE categorias
(
	id int unsigned not null auto_increment,
    nome varchar(100),
    descricao varchar(300),
    primary key (id)
);

CREATE TABLE despesas
(
 id int unsigned not null auto_increment,
 valor double,
 data_compra datetime,
 descricao varchar(255),
 tipo_pagamento_id int unsigned,
 categoria_id int unsigned,
 primary key (id),
 foreign key (tipo_pagamento_id) references tipos_pagamento(id),
 foreign key (categoria_id) references categorias(id)
);

insert into categorias (nome, descricao) values ('Frete', 'tt');
insert into tipos_pagamento(tipo) values ('Debito');
insert into despesas (valor, data_compra, descricao, tipo_pagamento_id, categoria_id) values (100, '2024-04-17 13:12:00.000000', 'cc', 1,1);
insert into categorias(nome, descricao) values ('taxa', 'gastos com tarifas e taxas');
insert into categorias(nome, descricao) values ('combustivel', 'gasto com combustivel da viagem');
commit;