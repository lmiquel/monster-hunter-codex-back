INSERT INTO locations (name) VALUES 
('Forêt ancienne'),
('Désert des Termites'),
('Plateau de Corail'),
('Val Putride'),
('Terres des Anciens'),
('Givre éternel');

INSERT INTO monster (name, picture, severable_tail) VALUES
('Odogaron', 'https://www.eclypsia.com/content/MonsterHunter/World/Monstres/14.png', 1),
('Paolumu', 'https://www.eclypsia.com/content/MonsterHunter/World/Monstres/10.png', 0),
('Nergigante', 'https://www.eclypsia.com/content/MonsterHunter/World/Monstres/26.png', 1),
('Rathalos', 'https://www.eclypsia.com/content/MonsterHunter/World/Monstres/15.png', 1),
('Barioth', 'https://www.eclypsia.com/content/MonsterHunter/Iceborne/Monstres/Portraits/Barioth.png', 1),
('Tigrex', 'https://www.eclypsia.com/content/MonsterHunter/Iceborne/Monstres/Portraits/Tigrex.png', 1),
('Teostra', 'https://www.eclypsia.com/content/MonsterHunter/World/Monstres/27.png', 1),
('Pukei pukei', 'https://www.eclypsia.com/content/MonsterHunter/World/Monstres/03.png', 1);

INSERT INTO elements (fire, water, thunder, ice, dragon, monster_id) VALUES 
('⭐', '⭐', '⭐⭐', '⭐⭐⭐', '❌', 1),
('⭐⭐⭐', '❌', '⭐⭐', '⭐', '⭐', 2),
('⭐', '⭐', '⭐⭐⭐', '⭐', '⭐⭐', 3),
('❌', '⭐', '⭐', '⭐⭐', '⭐⭐⭐', 4),
('⭐⭐⭐', '❌', '⭐⭐', '❌', '⭐', 5),
('❌', '⭐', '⭐⭐⭐', '⭐', '⭐⭐⭐', 6),
('❌', '⭐⭐⭐', '⭐', '⭐⭐⭐', '⭐', 7),
('⭐⭐', '❌', '⭐⭐⭐', '⭐⭐', '⭐', 8);

INSERT INTO ailments (poison, sleep, paralysis, blast, stun, monster_id) VALUES 
('⭐', '⭐⭐', '⭐⭐⭐', '⭐⭐', '⭐⭐', 1),
('⭐⭐', '⭐⭐', '⭐⭐', '⭐⭐⭐', '⭐⭐⭐', 2),
('⭐⭐', '⭐⭐', '⭐⭐', '⭐⭐', '⭐⭐', 3),
('⭐', '⭐⭐', '⭐⭐', '⭐', '⭐⭐', 4),
('⭐⭐', '⭐⭐', '⭐⭐', '⭐⭐', '⭐⭐', 5),
('⭐⭐', '⭐⭐', '⭐⭐', '⭐⭐', '⭐⭐', 6),
('⭐⭐', '⭐', '⭐', '⭐', '⭐⭐', 7),
('⭐', '⭐⭐⭐', '⭐⭐⭐', '⭐⭐', '⭐⭐', 8);


INSERT INTO monster_has_locations (monster_id, locations_id) VALUES
(1, 4),
(1, 3),
(2, 3),
(3, 5),
(3, 2),
(4, 1),
(5, 6),
(6, 6),
(6, 4),
(7, 2),
(7, 5),
(8, 1),
(8, 2);