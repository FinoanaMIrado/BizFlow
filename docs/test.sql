-- -----------------------------------------------------------------------------
--             Génération d'une base de données pour
--                           PostgreSQL
--                        (3/10/2026 9:16:31)
-- -----------------------------------------------------------------------------
--      Nom de la base : Bizflow
--      Projet : Accueil Win'Design version 7
--      Auteur : de rich
--      Date de dernière modification : 3/10/2026 8:58:55
-- -----------------------------------------------------------------------------

-- -----------------------------------------------------------------------------
--       CREATION DE LA BASE 
-- -----------------------------------------------------------------------------

CREATE DATABASE bizflow;

-- -----------------------------------------------------------------------------
--       TABLE : PAIEMENT
-- -----------------------------------------------------------------------------

CREATE TABLE PAIEMENT
   (
    NUMPAIEMENT char(32) NOT NULL  ,
    NUMCOMMANDE char(32) NOT NULL  ,
    MODEPAIEMENT char(32) NOT NULL  ,
    DATE date(8) NOT NULL  ,
    STATUT char(32) NOT NULL  ,
    MONTANT char(32) NOT NULL  
,   CONSTRAINT PK_PAIEMENT PRIMARY KEY (NUMPAIEMENT)
   );

-- -----------------------------------------------------------------------------
--       INDEX DE LA TABLE PAIEMENT
-- -----------------------------------------------------------------------------

CREATE  INDEX I_FK_PAIEMENT_COMMANDE
     ON PAIEMENT (NUMCOMMANDE)
    ;

-- -----------------------------------------------------------------------------
--       TABLE : UTILISATEUR
-- -----------------------------------------------------------------------------

CREATE TABLE UTILISATEUR
   (
    NUMUTILISATEUR int4 NOT NULL  ,
    IDROLE char(32) NOT NULL  ,
    NOM char(32) NOT NULL  ,
    PRENOM char(32) NOT NULL  ,
    MAIL char(32) NOT NULL  ,
    TEL char(32) NOT NULL  ,
    PASSWORD char(32) NOT NULL  ,
    STATUT char(32) NOT NULL  ,
    DATEDECRATION date(8) NOT NULL  
,   CONSTRAINT PK_UTILISATEUR PRIMARY KEY (NUMUTILISATEUR)
   );

-- -----------------------------------------------------------------------------
--       INDEX DE LA TABLE UTILISATEUR
-- -----------------------------------------------------------------------------

CREATE  INDEX I_FK_UTILISATEUR_ROLE
     ON UTILISATEUR (IDROLE)
    ;

-- -----------------------------------------------------------------------------
--       TABLE : COMMANDE
-- -----------------------------------------------------------------------------

CREATE TABLE COMMANDE
   (
    NUMCOMMANDE char(32) NOT NULL  ,
    CODECLIENT char(32) NOT NULL  ,
    DATE date(8) NOT NULL  ,
    STATUT char(32) NOT NULL  
,   CONSTRAINT PK_COMMANDE PRIMARY KEY (NUMCOMMANDE)
   );

-- -----------------------------------------------------------------------------
--       INDEX DE LA TABLE COMMANDE
-- -----------------------------------------------------------------------------

CREATE  INDEX I_FK_COMMANDE_CLIENT
     ON COMMANDE (CODECLIENT)
    ;

-- -----------------------------------------------------------------------------
--       TABLE : ACTION
-- -----------------------------------------------------------------------------

CREATE TABLE ACTION
   (
    NUMACTION char(32) NOT NULL  ,
    NUMUTILISATEUR int4 NOT NULL  ,
    DATE timestamp(12) NOT NULL  ,
    TYPEACTION char(32) NOT NULL  
,   CONSTRAINT PK_ACTION PRIMARY KEY (NUMACTION)
   );

-- -----------------------------------------------------------------------------
--       INDEX DE LA TABLE ACTION
-- -----------------------------------------------------------------------------

CREATE  INDEX I_FK_ACTION_UTILISATEUR
     ON ACTION (NUMUTILISATEUR)
    ;

-- -----------------------------------------------------------------------------
--       TABLE : CLIENT
-- -----------------------------------------------------------------------------

CREATE TABLE CLIENT
   (
    CODECLIENT char(32) NOT NULL  ,
    NOM char(32) NOT NULL  ,
    PRENOM char(32) NOT NULL  ,
    MAIL char(32) NOT NULL  ,
    TEL char(32) NOT NULL  ,
    ADRESSE char(32) NOT NULL  ,
    DATEDECREATION date(8) NOT NULL  ,
    STATUT char(32) NOT NULL  
,   CONSTRAINT PK_CLIENT PRIMARY KEY (CODECLIENT)
   );

-- -----------------------------------------------------------------------------
--       TABLE : PRODUIT
-- -----------------------------------------------------------------------------

CREATE TABLE PRODUIT
   (
    CODEPRODUIT char(32) NOT NULL  ,
    DESCRIPTION char(32) NOT NULL  ,
    DESIGNATION char(32) NOT NULL  ,
    CATEGORIE char(32) NOT NULL  ,
    PU char(32) NOT NULL  ,
    SEUILDALERTE char(32) NOT NULL  ,
    STATUT char(32) NOT NULL  ,
    DATEDAJOUT char(32) NOT NULL  ,
    QTE char(32) NOT NULL  
,   CONSTRAINT PK_PRODUIT PRIMARY KEY (CODEPRODUIT)
   );

-- -----------------------------------------------------------------------------
--       TABLE : ROLE
-- -----------------------------------------------------------------------------

CREATE TABLE ROLE
   (
    IDROLE char(32) NOT NULL  ,
    LIBELLE char(32) NOT NULL  
,   CONSTRAINT PK_ROLE PRIMARY KEY (IDROLE)
   );

-- -----------------------------------------------------------------------------
--       TABLE : CONCERNER
-- -----------------------------------------------------------------------------

CREATE TABLE CONCERNER
   (
    CODEPRODUIT char(32) NOT NULL  ,
    NUMCOMMANDE char(32) NOT NULL  ,
    QTE_COMMANDE char(32) NOT NULL  
,   CONSTRAINT PK_CONCERNER PRIMARY KEY (CODEPRODUIT, NUMCOMMANDE)
   );

-- -----------------------------------------------------------------------------
--       INDEX DE LA TABLE CONCERNER
-- -----------------------------------------------------------------------------

CREATE  INDEX I_FK_CONCERNER_PRODUIT
     ON CONCERNER (CODEPRODUIT)
    ;

CREATE  INDEX I_FK_CONCERNER_COMMANDE
     ON CONCERNER (NUMCOMMANDE)
    ;

-- -----------------------------------------------------------------------------
--       TABLE : GERER_PROD
-- -----------------------------------------------------------------------------

CREATE TABLE GERER_PROD
   (
    NUMUTILISATEUR int4 NOT NULL  ,
    CODEPRODUIT char(32) NOT NULL  
,   CONSTRAINT PK_GERER_PROD PRIMARY KEY (NUMUTILISATEUR, CODEPRODUIT)
   );

-- -----------------------------------------------------------------------------
--       INDEX DE LA TABLE GERER_PROD
-- -----------------------------------------------------------------------------

CREATE  INDEX I_FK_GERER_PROD_UTILISATEUR
     ON GERER_PROD (NUMUTILISATEUR)
    ;

CREATE  INDEX I_FK_GERER_PROD_PRODUIT
     ON GERER_PROD (CODEPRODUIT)
    ;

-- -----------------------------------------------------------------------------
--       TABLE : GERER_CLI
-- -----------------------------------------------------------------------------

CREATE TABLE GERER_CLI
   (
    NUMUTILISATEUR int4 NOT NULL  ,
    CODECLIENT char(32) NOT NULL  
,   CONSTRAINT PK_GERER_CLI PRIMARY KEY (NUMUTILISATEUR, CODECLIENT)
   );

-- -----------------------------------------------------------------------------
--       INDEX DE LA TABLE GERER_CLI
-- -----------------------------------------------------------------------------

CREATE  INDEX I_FK_GERER_CLI_UTILISATEUR
     ON GERER_CLI (NUMUTILISATEUR)
    ;

CREATE  INDEX I_FK_GERER_CLI_CLIENT
     ON GERER_CLI (CODECLIENT)
    ;

-- -----------------------------------------------------------------------------
--       TABLE : GERER_COM
-- -----------------------------------------------------------------------------

CREATE TABLE GERER_COM
   (
    NUMUTILISATEUR int4 NOT NULL  ,
    NUMCOMMANDE char(32) NOT NULL  
,   CONSTRAINT PK_GERER_COM PRIMARY KEY (NUMUTILISATEUR, NUMCOMMANDE)
   );

-- -----------------------------------------------------------------------------
--       INDEX DE LA TABLE GERER_COM
-- -----------------------------------------------------------------------------

CREATE  INDEX I_FK_GERER_COM_UTILISATEUR
     ON GERER_COM (NUMUTILISATEUR)
    ;

CREATE  INDEX I_FK_GERER_COM_COMMANDE
     ON GERER_COM (NUMCOMMANDE)
    ;

-- -----------------------------------------------------------------------------
--       TABLE : GERER_PAIE
-- -----------------------------------------------------------------------------

CREATE TABLE GERER_PAIE
   (
    NUMUTILISATEUR int4 NOT NULL  ,
    NUMPAIEMENT char(32) NOT NULL  
,   CONSTRAINT PK_GERER_PAIE PRIMARY KEY (NUMUTILISATEUR, NUMPAIEMENT)
   );

-- -----------------------------------------------------------------------------
--       INDEX DE LA TABLE GERER_PAIE
-- -----------------------------------------------------------------------------

CREATE  INDEX I_FK_GERER_PAIE_UTILISATEUR
     ON GERER_PAIE (NUMUTILISATEUR)
    ;

CREATE  INDEX I_FK_GERER_PAIE_PAIEMENT
     ON GERER_PAIE (NUMPAIEMENT)
    ;


-- -----------------------------------------------------------------------------
--       CREATION DES REFERENCES DE TABLE
-- -----------------------------------------------------------------------------


ALTER TABLE PAIEMENT ADD 
     CONSTRAINT FK_PAIEMENT_COMMANDE
          FOREIGN KEY (NUMCOMMANDE)
               REFERENCES COMMANDE (NUMCOMMANDE);

ALTER TABLE UTILISATEUR ADD 
     CONSTRAINT FK_UTILISATEUR_ROLE
          FOREIGN KEY (IDROLE)
               REFERENCES ROLE (IDROLE);

ALTER TABLE COMMANDE ADD 
     CONSTRAINT FK_COMMANDE_CLIENT
          FOREIGN KEY (CODECLIENT)
               REFERENCES CLIENT (CODECLIENT);

ALTER TABLE ACTION ADD 
     CONSTRAINT FK_ACTION_UTILISATEUR
          FOREIGN KEY (NUMUTILISATEUR)
               REFERENCES UTILISATEUR (NUMUTILISATEUR);

ALTER TABLE CONCERNER ADD 
     CONSTRAINT FK_CONCERNER_PRODUIT
          FOREIGN KEY (CODEPRODUIT)
               REFERENCES PRODUIT (CODEPRODUIT);

ALTER TABLE CONCERNER ADD 
     CONSTRAINT FK_CONCERNER_COMMANDE
          FOREIGN KEY (NUMCOMMANDE)
               REFERENCES COMMANDE (NUMCOMMANDE);

ALTER TABLE GERER_PROD ADD 
     CONSTRAINT FK_GERER_PROD_UTILISATEUR
          FOREIGN KEY (NUMUTILISATEUR)
               REFERENCES UTILISATEUR (NUMUTILISATEUR);

ALTER TABLE GERER_PROD ADD 
     CONSTRAINT FK_GERER_PROD_PRODUIT
          FOREIGN KEY (CODEPRODUIT)
               REFERENCES PRODUIT (CODEPRODUIT);

ALTER TABLE GERER_CLI ADD 
     CONSTRAINT FK_GERER_CLI_UTILISATEUR
          FOREIGN KEY (NUMUTILISATEUR)
               REFERENCES UTILISATEUR (NUMUTILISATEUR);

ALTER TABLE GERER_CLI ADD 
     CONSTRAINT FK_GERER_CLI_CLIENT
          FOREIGN KEY (CODECLIENT)
               REFERENCES CLIENT (CODECLIENT);

ALTER TABLE GERER_COM ADD 
     CONSTRAINT FK_GERER_COM_UTILISATEUR
          FOREIGN KEY (NUMUTILISATEUR)
               REFERENCES UTILISATEUR (NUMUTILISATEUR);

ALTER TABLE GERER_COM ADD 
     CONSTRAINT FK_GERER_COM_COMMANDE
          FOREIGN KEY (NUMCOMMANDE)
               REFERENCES COMMANDE (NUMCOMMANDE);

ALTER TABLE GERER_PAIE ADD 
     CONSTRAINT FK_GERER_PAIE_UTILISATEUR
          FOREIGN KEY (NUMUTILISATEUR)
               REFERENCES UTILISATEUR (NUMUTILISATEUR);

ALTER TABLE GERER_PAIE ADD 
     CONSTRAINT FK_GERER_PAIE_PAIEMENT
          FOREIGN KEY (NUMPAIEMENT)
               REFERENCES PAIEMENT (NUMPAIEMENT);


-- -----------------------------------------------------------------------------
--                FIN DE GENERATION
-- -----------------------------------------------------------------------------
