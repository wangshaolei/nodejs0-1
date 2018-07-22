use node_demo;

create table if not exists table_users(
	user_id INTEGER NOT NULL AUTO_INCREMENT,
	user_name VARCHAR(10) NOT NULL,
	PRIMARY KEY (user_id)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;

insert into table_users values('1', '张三');
insert into table_users values('2', '李四');
insert into table_users values('3', '王五');
insert into table_users values('4', '麻六');
insert into table_users values('5', '小七');
