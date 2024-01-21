create database if not exists proekt collate utf8_general_ci;
use proekt;

-- создание таблиц
create table if not exists BUYER
(
    B_KOD_BUYER      int(5)      not null
        primary key,
    B_ADRES          text        not null,
    B_KOL_VO_ZAKAZOV varchar(10) not null,
    B_FIO            text        not null,
    B_TELEPHONE      varchar(12) not null
);

create table if not exists ETAP
(
    E_KOD_ETAPA int(3)      not null
        primary key,
    E_NAZV      varchar(10) not null
);

create table if not exists OTDEL
(
    O_KOD_OTDELA int(3)      not null
        primary key,
    O_NAZV       varchar(25) not null,
    O_ADRES      text        not null,
    O_TELEPHONE  varchar(12) not null
);

create table if not exists POSTAVKI
(
    P_KOD_POSTAVKI int(3)      not null
        primary key,
    P_NAZV         varchar(25) not null,
    P_ADRES        text        not null,
    P_STRANA       varchar(25) not null
);

create table if not exists TOVAR
(
    T_KOD_TOVARA     int(5)      not null
        primary key,
    T_KOD_OTDELA     int(3)      not null,
    T_KOD_POSTAVKI   int(3)      not null,
    T_NAZV           varchar(25) not null,
    T_CROK_HRANENIYA date        not null,
    T_STOIMOST       int         not null,
    constraint TOVAR_OTDEL_O_KOD_OTDELA_fk
        foreign key (T_KOD_OTDELA) references OTDEL (O_KOD_OTDELA),
    constraint TOVAR_POSTAVKI_P_KOD_POSTAVKI_fk
        foreign key (T_KOD_POSTAVKI) references POSTAVKI (P_KOD_POSTAVKI)
);

create table if not exists ZAKAZI
(
    Z_KOD_ZAKAZA    varchar(10)        not null
        primary key,
    Z_KOD_TOVARA    int(5)             not null,
    Z_KOD_BUYER     int(5)             not null,
    Z_KOD_ETAP      int(3)             not null,
    Z_DATA_BUY      date               not null,
    Z_DATA_DOSTAVKI date               not null,
    Z_KOL_VO        smallint default 1 not null,
    Z_STOIMOST      int                not null,
    constraint ZAKAZI_BUYER_B_KOD_BUYER_fk
        foreign key (Z_KOD_BUYER) references BUYER (B_KOD_BUYER),
    constraint ZAKAZI_ETAP_E_KOD_ETAPA_fk
        foreign key (Z_KOD_ETAP) references ETAP (E_KOD_ETAPA),
    constraint ZAKAZI_TOVAR_T_KOD_TOVARA_fk
        foreign key (Z_KOD_TOVARA) references TOVAR (T_KOD_TOVARA)
);


-- заполнение таблиц
INSERT INTO proekt.BUYER (B_KOD_BUYER, B_ADRES, B_KOL_VO_ZAKAZOV, B_FIO, B_TELEPHONE)
VALUES (1, 'Вологодская область, город Шатура, проезд Космонавтов, 28', '2', 'Макарова Алиса Глебовна', '89274375445');
INSERT INTO proekt.BUYER (B_KOD_BUYER, B_ADRES, B_KOL_VO_ZAKAZOV, B_FIO, B_TELEPHONE)
VALUES (2, 'Ростовская область, город Сергиев Посад, бульвар Ленина, 41', '1', 'Субботин Дмитрий Денисович',
        '89277654322');
INSERT INTO proekt.BUYER (B_KOD_BUYER, B_ADRES, B_KOL_VO_ZAKAZOV, B_FIO, B_TELEPHONE)
VALUES (3, 'Белгородская область, город Солнечногорск, проезд Чехова, 31', '1', 'Петров Арсений Максимович',
        '89513253259');
INSERT INTO proekt.BUYER (B_KOD_BUYER, B_ADRES, B_KOL_VO_ZAKAZOV, B_FIO, B_TELEPHONE)
VALUES (4, 'Орловская область, город Красногорск, ул. Бухарестская, 14', '1', 'Самойлова Арина Данииловна',
        '89374394753');
INSERT INTO proekt.BUYER (B_KOD_BUYER, B_ADRES, B_KOL_VO_ZAKAZOV, B_FIO, B_TELEPHONE)
VALUES (5, 'Ростовская область, город Пушкино, наб. Сталина, 96', '4', 'Шевелев Адам Святославович', '89512565125');

INSERT INTO proekt.OTDEL (O_KOD_OTDELA, O_NAZV, O_ADRES, O_TELEPHONE)
VALUES (1, 'Упаковка товаров', 'Волгоградская область, город Москва, шоссе Сталина, 08', '89514565551');
INSERT INTO proekt.OTDEL (O_KOD_OTDELA, O_NAZV, O_ADRES, O_TELEPHONE)
VALUES (2, 'Сборка и прием заказов', 'Волгоградская область, город Москва, шоссе Сталина, 07', '89514565552');
INSERT INTO proekt.OTDEL (O_KOD_OTDELA, O_NAZV, O_ADRES, O_TELEPHONE)
VALUES (3, 'Администрация', 'Волгоградская область, город Москва, шоссе Сталина, 09', '89514565553');
INSERT INTO proekt.OTDEL (O_KOD_OTDELA, O_NAZV, O_ADRES, O_TELEPHONE)
VALUES (4, 'Выкладка заказов', 'Волгоградская область, город Москва, шоссе Сталина, 07', '89514565554');
INSERT INTO proekt.OTDEL (O_KOD_OTDELA, O_NAZV, O_ADRES, O_TELEPHONE)
VALUES (5, 'Учет и складирование', 'Волгоградская область, город Москва, шоссе Сталина, 07', '89514565555');

INSERT INTO proekt.POSTAVKI (P_KOD_POSTAVKI, P_NAZV, P_ADRES, P_STRANA)
VALUES (1, 'Рыба с дальнего востока', 'Сахалинская область, город Солнечногорск, шоссе 1905 года, 85', 'Россия');
INSERT INTO proekt.POSTAVKI (P_KOD_POSTAVKI, P_NAZV, P_ADRES, P_STRANA)
VALUES (2, 'Чак-чак казанский', 'Респ.Татарстан, ул. Мухамедьяра, 12', 'Россия');
INSERT INTO proekt.POSTAVKI (P_KOD_POSTAVKI, P_NAZV, P_ADRES, P_STRANA)
VALUES (3, 'Мясо козлика', 'Белгородская область, город Луховицы, проезд Ломоносова, 11', 'Россия');
INSERT INTO proekt.POSTAVKI (P_KOD_POSTAVKI, P_NAZV, P_ADRES, P_STRANA)
VALUES (4, 'Колбаса вязонка', 'Белгородская область, город Луховицы, проезд Ломоносова, 11', 'Россия');
INSERT INTO proekt.POSTAVKI (P_KOD_POSTAVKI, P_NAZV, P_ADRES, P_STRANA)
VALUES (5, 'Огурцы спелые', 'Респ.Татарстан, ул. Мухамедьяра, 12', 'Россия');
INSERT INTO proekt.POSTAVKI (P_KOD_POSTAVKI, P_NAZV, P_ADRES, P_STRANA)
VALUES (6, 'Помидоры чери', 'Респ.Татарстан, ул. Мухамедьяра, 12', 'Россия');
INSERT INTO proekt.POSTAVKI (P_KOD_POSTAVKI, P_NAZV, P_ADRES, P_STRANA)
VALUES (7, 'Молоко TOJI`S', 'Респ.Татарстан, ул. Мухамедьяра, 12', 'Россия');

INSERT INTO proekt.TOVAR (T_KOD_TOVARA, T_KOD_OTDELA, T_KOD_POSTAVKI, T_NAZV, T_CROK_HRANENIYA, T_STOIMOST)
VALUES (1, 4, 1, 'Лосось', '2024-01-09', 750);
INSERT INTO proekt.TOVAR (T_KOD_TOVARA, T_KOD_OTDELA, T_KOD_POSTAVKI, T_NAZV, T_CROK_HRANENIYA, T_STOIMOST)
VALUES (2, 4, 2, 'Чак-чак', '2024-01-20', 650);
INSERT INTO proekt.TOVAR (T_KOD_TOVARA, T_KOD_OTDELA, T_KOD_POSTAVKI, T_NAZV, T_CROK_HRANENIYA, T_STOIMOST)
VALUES (3, 4, 3, 'Мясо козлика', '2024-12-09', 650);
INSERT INTO proekt.TOVAR (T_KOD_TOVARA, T_KOD_OTDELA, T_KOD_POSTAVKI, T_NAZV, T_CROK_HRANENIYA, T_STOIMOST)
VALUES (4, 4, 4, 'Колбаса', '2024-12-09', 350);
INSERT INTO proekt.TOVAR (T_KOD_TOVARA, T_KOD_OTDELA, T_KOD_POSTAVKI, T_NAZV, T_CROK_HRANENIYA, T_STOIMOST)
VALUES (5, 4, 5, 'Огруцы', '2024-01-25', 300);
INSERT INTO proekt.TOVAR (T_KOD_TOVARA, T_KOD_OTDELA, T_KOD_POSTAVKI, T_NAZV, T_CROK_HRANENIYA, T_STOIMOST)
VALUES (6, 4, 6, 'Помидоры', '2023-01-24', 250);
INSERT INTO proekt.TOVAR (T_KOD_TOVARA, T_KOD_OTDELA, T_KOD_POSTAVKI, T_NAZV, T_CROK_HRANENIYA, T_STOIMOST)
VALUES (7, 4, 7, 'Молоко', '2023-01-01', 75);

INSERT INTO proekt.ETAP (E_KOD_ETAPA, E_NAZV)
VALUES (1, 'сборка');
INSERT INTO proekt.ETAP (E_KOD_ETAPA, E_NAZV)
VALUES (2, 'Доставка');
INSERT INTO proekt.ETAP (E_KOD_ETAPA, E_NAZV)
VALUES (3, 'Получение');

INSERT INTO proekt.ZAKAZI (Z_KOD_ZAKAZA, Z_KOD_TOVARA, Z_KOD_BUYER, Z_KOD_ETAP, Z_DATA_BUY, Z_DATA_DOSTAVKI, Z_KOL_VO,
                           Z_STOIMOST)
VALUES ('1', 1, 1, 2, '2023-12-08', '2023-12-10', 2, 1500);
INSERT INTO proekt.ZAKAZI (Z_KOD_ZAKAZA, Z_KOD_TOVARA, Z_KOD_BUYER, Z_KOD_ETAP, Z_DATA_BUY, Z_DATA_DOSTAVKI, Z_KOL_VO,
                           Z_STOIMOST)
VALUES ('2', 2, 1, 2, '2023-12-08', '2023-12-10', 1, 650);
INSERT INTO proekt.ZAKAZI (Z_KOD_ZAKAZA, Z_KOD_TOVARA, Z_KOD_BUYER, Z_KOD_ETAP, Z_DATA_BUY, Z_DATA_DOSTAVKI, Z_KOL_VO,
                           Z_STOIMOST)
VALUES ('3', 1, 2, 1, '2023-12-10', '2023-12-12', 3, 2250);
INSERT INTO proekt.ZAKAZI (Z_KOD_ZAKAZA, Z_KOD_TOVARA, Z_KOD_BUYER, Z_KOD_ETAP, Z_DATA_BUY, Z_DATA_DOSTAVKI, Z_KOL_VO,
                           Z_STOIMOST)
VALUES ('4', 7, 3, 1, '2023-12-23', '2023-12-25', 2, 150);
INSERT INTO proekt.ZAKAZI (Z_KOD_ZAKAZA, Z_KOD_TOVARA, Z_KOD_BUYER, Z_KOD_ETAP, Z_DATA_BUY, Z_DATA_DOSTAVKI, Z_KOL_VO,
                           Z_STOIMOST)
VALUES ('5', 3, 4, 3, '2023-12-12', '2023-12-14', 2, 1300);
INSERT INTO proekt.ZAKAZI (Z_KOD_ZAKAZA, Z_KOD_TOVARA, Z_KOD_BUYER, Z_KOD_ETAP, Z_DATA_BUY, Z_DATA_DOSTAVKI, Z_KOL_VO,
                           Z_STOIMOST)
VALUES ('6', 4, 5, 1, '2023-12-23', '2023-12-26', 3, 1050);
INSERT INTO proekt.ZAKAZI (Z_KOD_ZAKAZA, Z_KOD_TOVARA, Z_KOD_BUYER, Z_KOD_ETAP, Z_DATA_BUY, Z_DATA_DOSTAVKI, Z_KOL_VO,
                           Z_STOIMOST)
VALUES ('7', 5, 5, 1, '2023-12-23', '2023-12-26', 3, 900);
INSERT INTO proekt.ZAKAZI (Z_KOD_ZAKAZA, Z_KOD_TOVARA, Z_KOD_BUYER, Z_KOD_ETAP, Z_DATA_BUY, Z_DATA_DOSTAVKI, Z_KOL_VO,
                           Z_STOIMOST)
VALUES ('8', 6, 5, 1, '2023-12-23', '2023-12-26', 3, 750);
INSERT INTO proekt.ZAKAZI (Z_KOD_ZAKAZA, Z_KOD_TOVARA, Z_KOD_BUYER, Z_KOD_ETAP, Z_DATA_BUY, Z_DATA_DOSTAVKI, Z_KOL_VO,
                           Z_STOIMOST)
VALUES ('9', 7, 5, 1, '2023-12-23', '2023-12-26', 2, 150);

-- текст запросов
use proekt;
select distinct T_KOD_TOVARA     as 'Код товара',
                O_NAZV           as 'Название отдела',
                P_NAZV           as 'Название Поставшика',
                T_NAZV           as 'Название товара',
                T_CROK_HRANENIYA as 'Срок хранения',
                T_STOIMOST       as 'Стоимость товара (руб)'
from TOVAR,
     OTDEL,
     POSTAVKI
where O_KOD_OTDELA = T_KOD_OTDELA
  and P_KOD_POSTAVKI = TOVAR.T_KOD_POSTAVKI;

select distinct Z_KOD_ZAKAZA    as 'Код заказа',
                T_NAZV          as 'Название',
                B_FIO           as 'ФИО',
                E_NAZV          as 'Название этапа',
                Z_DATA_BUY      as 'Дата покупки',
                Z_DATA_DOSTAVKI as 'Дата доставка',
                Z_KOL_VO        as 'Количество товаров',
                Z_STOIMOST      as 'Стоимость'
from ZAKAZI,
     BUYER,
     ETAP,
     TOVAR
where Z_KOD_BUYER = B_KOD_BUYER
  and Z_KOD_ETAP = E_KOD_ETAPA
  and Z_KOD_TOVARA = T_KOD_TOVARA;

select T_NAZV,
       sum(Z_STOIMOST) as 'Заказов на стоимость:',
       count(Z_KOL_VO) as 'Количество заказов:'
from ZAKAZI,
     tovar
where T_KOD_TOVARA = Z_KOD_TOVARA
group by T_NAZV

-- выходная таблица
use proekt;
DROP TABLE IF EXISTS Отчет;
create table Отчет
(
    ID_Заказа           varchar(255),
    Название_товара     varchar(255),
    Название_поставщика varchar(255),
    Название_этапа      varchar(255),
    Дата_покупки        varchar(255),
    Дата_доставки       varchar(255),
    Цена                varchar(255),
    Сумма_оплаты        varchar(255)
);


INSERT INTO Отчет (ID_Заказа, Название_товара, Название_поставщика, Название_этапа, Дата_покупки, Дата_доставки, Цена,
                   Сумма_оплаты)
select Z_KOD_ZAKAZA,
       'Номер заявки: ',
       cast(Z_KOD_ZAKAZA as char(50)),
       '',
       '',
       '',
       '',
       ''
from proekt.ZAKAZI
order by Z_KOD_ZAKAZA;



insert into Отчет (ID_Заказа, Название_товара, Название_поставщика, Название_этапа, Дата_покупки, Дата_доставки, Цена,
                   Сумма_оплаты)
select Z_KOD_ZAKAZA,
       concat('Название: ', T_NAZV, ','),
       concat('Поставщик: ', P_NAZV, ','),
       E_NAZV,
       Z_DATA_BUY,
       Z_DATA_DOSTAVKI,
       concat('Цена: ', T_STOIMOST, ','),
       concat('Количество: ', Z_KOL_VO)
from proekt.ZAKAZI
         join proekt.TOVAR on T_KOD_TOVARA = Z_KOD_TOVARA
         join proekt.ETAP on E_KOD_ETAPA = Z_KOD_ETAP
         join proekt.POSTAVKI on TOVAR.T_KOD_POSTAVKI = POSTAVKI.P_KOD_POSTAVKI
order by Z_KOD_ZAKAZA;



insert into Отчет (ID_Заказа, Название_товара, Название_поставщика, Название_этапа, Дата_покупки, Дата_доставки, Цена,
                   Сумма_оплаты)
select Z_KOD_ZAKAZA,
       CONCAT('Итого по заявке ', cast(Z_KOD_ZAKAZA as char(50)), ','),
       CONCAT('Стоимость для клиента: ', round(SUM(Z_STOIMOST) * 1.3)),
       '',
       '',
       '',
       '',
       ''
from proekt.ZAKAZI
         join proekt.TOVAR on T_KOD_TOVARA = Z_KOD_TOVARA
group by Z_KOD_ZAKAZA
order by Z_KOD_ZAKAZA;

insert into Отчет (ID_Заказа, Название_товара, Название_поставщика, Название_этапа, Дата_покупки, Дата_доставки, Цена,
                   Сумма_оплаты)
select Z_KOD_ZAKAZA,
       '──────────────────────────',
       '',
       '',
       '',
       '',
       '',
       ''
from proekt.ZAKAZI
order by Z_KOD_ZAKAZA;



SELECT concat_ws('ㅤ'
           , CONCAT(Название_товара)
           , CONCAT(Название_поставщика)
           , CONCAT(Цена)
           , CONCAT(Сумма_оплаты)
           ) AS 'Ведомость по заказам в 2023 году'
from Отчет
order by ID_Заказа;