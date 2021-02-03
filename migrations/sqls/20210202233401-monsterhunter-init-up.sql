-- -----------------------------------------------------
-- Schema monsterhunter
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `monsterhunter` ;
USE `monsterhunter` ;

-- -----------------------------------------------------
-- Table `elements`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `elements` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `fire` VARCHAR(45) NOT NULL,
  `water` VARCHAR(45) NOT NULL,
  `thunder` VARCHAR(45) NOT NULL,
  `ice` VARCHAR(45) NOT NULL,
  `dragon` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ailments`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ailments` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `poison` VARCHAR(45) NOT NULL,
  `sleep` VARCHAR(45) NOT NULL,
  `paralysis` VARCHAR(45) NOT NULL,
  `blast` VARCHAR(45) NOT NULL,
  `stun` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `monster`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `monster` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(75) NOT NULL,
  `picture` VARCHAR(100) NOT NULL,
  `severable_tail` TINYINT(1) NOT NULL,
  `elements_id` INT NOT NULL,
  `ailments_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_monster_elements_idx` (`elements_id` ASC) VISIBLE,
  INDEX `fk_monster_ailments1_idx` (`ailments_id` ASC) VISIBLE,
  CONSTRAINT `fk_monster_elements`
    FOREIGN KEY (`elements_id`)
    REFERENCES `elements` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_monster_ailments1`
    FOREIGN KEY (`ailments_id`)
    REFERENCES `ailments` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `locations`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `locations` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(75) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `monster_has_locations`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `monster_has_locations` (
  `monster_id` INT NOT NULL,
  `locations_id` INT NOT NULL,
  PRIMARY KEY (`monster_id`, `locations_id`),
  INDEX `fk_monster_has_locations_locations1_idx` (`locations_id` ASC) VISIBLE,
  INDEX `fk_monster_has_locations_monster1_idx` (`monster_id` ASC) VISIBLE,
  CONSTRAINT `fk_monster_has_locations_monster1`
    FOREIGN KEY (`monster_id`)
    REFERENCES `monster` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_monster_has_locations_locations1`
    FOREIGN KEY (`locations_id`)
    REFERENCES `locations` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
