-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 11-11-2022 a las 01:20:03
-- Versión del servidor: 10.4.24-MariaDB
-- Versión de PHP: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `to-do-pruebas`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `lists_tasks`
--

CREATE TABLE `lists_tasks` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `creation_date` datetime DEFAULT NULL,
  `date_of_resolution` datetime DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `archivada` tinyint(1) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `user_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `lists_tasks`
--

INSERT INTO `lists_tasks` (`id`, `title`, `creation_date`, `date_of_resolution`, `status`, `archivada`, `createdAt`, `updatedAt`, `user_id`) VALUES
(1, 'Escuela', '2022-11-11 00:17:52', NULL, 'sin resolver', 0, '2022-11-11 00:17:52', '2022-11-11 00:17:52', 3),
(2, 'Universidad', '2022-11-11 00:17:52', NULL, 'sin resolver', 0, '2022-11-11 00:17:52', '2022-11-11 00:17:52', 3),
(3, 'Escuela', '2022-11-11 00:17:52', NULL, 'sin resolver', 0, '2022-11-11 00:17:52', '2022-11-11 00:17:52', 4),
(4, 'Universidad', '2022-11-11 00:17:52', NULL, 'sin resolver', 0, '2022-11-11 00:17:52', '2022-11-11 00:17:52', 4),
(5, 'Gimnasia', '2022-11-11 00:17:52', NULL, 'sin resolver', 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 1),
(6, 'Proyectos', '2022-11-11 00:17:52', NULL, 'sin resolver', 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 1),
(7, 'Casa', '2022-11-11 00:17:52', NULL, 'sin resolver', 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 1),
(8, 'Gimnasia', '2022-11-11 00:17:52', NULL, 'sin resolver', 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 2),
(9, 'Proyectos', '2022-11-11 00:17:52', NULL, 'sin resolver', 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 2),
(10, 'Casa', '2022-11-11 00:17:52', NULL, 'sin resolver', 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 2),
(11, 'Gimnasia', '2022-11-11 00:17:52', NULL, 'sin resolver', 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 3),
(12, 'Proyectos', '2022-11-11 00:17:52', NULL, 'sin resolver', 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 3),
(13, 'Casa', '2022-11-11 00:17:52', NULL, 'sin resolver', 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 3),
(14, 'Gimnasia', '2022-11-11 00:17:52', NULL, 'sin resolver', 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 4),
(15, 'Proyectos', '2022-11-11 00:17:52', NULL, 'sin resolver', 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 4),
(16, 'Casa', '2022-11-11 00:17:52', NULL, 'sin resolver', 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 4);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `migrations`
--

CREATE TABLE `migrations` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `seeds`
--

CREATE TABLE `seeds` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `seeds`
--

INSERT INTO `seeds` (`name`) VALUES
('1-create-users.js'),
('2-create-lists.js'),
('3-create-tasks.js');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tasks`
--

CREATE TABLE `tasks` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `priority` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `expiration_date` datetime DEFAULT NULL,
  `creation_date` datetime DEFAULT NULL,
  `date_of_resolution` datetime DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `list_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `tasks`
--

INSERT INTO `tasks` (`id`, `title`, `description`, `priority`, `status`, `expiration_date`, `creation_date`, `date_of_resolution`, `createdAt`, `updatedAt`, `list_id`) VALUES
(1, 'optimize', 'Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support', '2', 'sin resolver', '2028-10-27 19:53:54', '2022-11-11 00:17:53', NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 1),
(2, 'synergize', 'New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016', '2', 'sin resolver', '2028-03-04 04:33:43', '2022-11-11 00:17:53', NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 1),
(3, 'generate', 'Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support', '2', 'sin resolver', '2026-01-14 20:42:58', '2022-11-11 00:17:53', NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 1),
(4, 'generate', 'Carbonite web goalkeeper gloves are ergonomically designed to give easy fit', '2', 'sin resolver', '2026-03-20 16:03:21', '2022-11-11 00:17:53', NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 1),
(5, 'iterate', 'The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality', '2', 'sin resolver', '2024-01-04 10:26:55', '2022-11-11 00:17:53', NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 2),
(6, 'architect', 'The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality', '2', 'sin resolver', '2023-02-01 14:39:16', '2022-11-11 00:17:53', NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 2),
(7, 'envisioneer', 'The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive', '2', 'sin resolver', '2028-01-24 02:07:32', '2022-11-11 00:17:53', NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 2),
(8, 'exploit', 'The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design', '2', 'sin resolver', '2023-05-30 14:29:45', '2022-11-11 00:17:53', NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 2),
(9, 'aggregate', 'The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients', '2', 'sin resolver', '2025-12-04 07:31:45', '2022-11-11 00:17:53', NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 3),
(10, 'cultivate', 'New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart', '2', 'sin resolver', '2028-06-07 03:35:49', '2022-11-11 00:17:53', NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 3),
(11, 'strategize', 'Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support', '2', 'sin resolver', '2029-10-09 02:42:22', '2022-11-11 00:17:53', NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 3),
(12, 'integrate', 'Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals', '2', 'sin resolver', '2022-11-22 07:28:43', '2022-11-11 00:17:53', NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 3),
(13, 'optimize', 'The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design', '2', 'sin resolver', '2027-07-25 23:48:03', '2022-11-11 00:17:53', NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 4),
(14, 'repurpose', 'The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive', '2', 'sin resolver', '2023-04-29 17:13:44', '2022-11-11 00:17:53', NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 4),
(15, 'empower', 'The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design', '2', 'sin resolver', '2026-08-12 09:39:25', '2022-11-11 00:17:53', NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 4),
(16, 'repurpose', 'Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals', '2', 'sin resolver', '2023-02-22 09:53:06', '2022-11-11 00:17:53', NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 4),
(17, 'transform', 'The Football Is Good For Training And Recreational Purposes', '2', 'sin resolver', '2023-07-07 02:33:02', '2022-11-11 00:17:53', NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 5),
(18, 'harness', 'New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016', '2', 'sin resolver', '2023-09-17 05:45:37', '2022-11-11 00:17:53', NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 5),
(19, 'enhance', 'New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart', '2', 'sin resolver', '2027-07-16 10:15:41', '2022-11-11 00:17:53', NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 5),
(20, 'embrace', 'Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support', '2', 'sin resolver', '2029-01-20 23:12:16', '2022-11-11 00:17:53', NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 5),
(21, 'seize', 'Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals', '2', 'sin resolver', '2027-10-25 20:51:19', '2022-11-11 00:17:53', NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 6),
(22, 'syndicate', 'Carbonite web goalkeeper gloves are ergonomically designed to give easy fit', '2', 'sin resolver', '2028-10-10 23:02:46', '2022-11-11 00:17:53', NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 6),
(23, 'strategize', 'Carbonite web goalkeeper gloves are ergonomically designed to give easy fit', '2', 'sin resolver', '2026-09-20 02:52:34', '2022-11-11 00:17:53', NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 6),
(24, 'deploy', 'The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive', '2', 'sin resolver', '2024-01-30 05:58:26', '2022-11-11 00:17:53', NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 6),
(25, 'evolve', 'New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart', '2', 'sin resolver', '2027-10-11 20:09:49', '2022-11-11 00:17:53', NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 7),
(26, 'target', 'Carbonite web goalkeeper gloves are ergonomically designed to give easy fit', '2', 'sin resolver', '2025-02-06 08:41:51', '2022-11-11 00:17:53', NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 7),
(27, 'optimize', 'Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support', '2', 'sin resolver', '2025-11-27 17:31:58', '2022-11-11 00:17:53', NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 7),
(28, 'implement', 'The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality', '2', 'sin resolver', '2026-08-27 21:50:34', '2022-11-11 00:17:53', NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 7),
(29, 'streamline', 'The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J', '2', 'sin resolver', '2029-01-20 08:58:29', '2022-11-11 00:17:53', NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 8),
(30, 'architect', 'New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016', '2', 'sin resolver', '2025-10-20 20:38:49', '2022-11-11 00:17:53', NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 8),
(31, 'leverage', 'The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients', '2', 'sin resolver', '2026-05-14 21:44:29', '2022-11-11 00:17:53', NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 8),
(32, 'matrix', 'The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients', '2', 'sin resolver', '2028-05-17 20:19:40', '2022-11-11 00:17:53', NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 8),
(33, 'target', 'The Football Is Good For Training And Recreational Purposes', '2', 'sin resolver', '2028-05-19 17:17:57', '2022-11-11 00:17:53', NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 9),
(34, 'morph', 'The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design', '2', 'sin resolver', '2024-10-21 06:31:48', '2022-11-11 00:17:53', NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 9),
(35, 'synthesize', 'Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals', '2', 'sin resolver', '2026-01-26 13:00:02', '2022-11-11 00:17:53', NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 9),
(36, 'extend', 'The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design', '2', 'sin resolver', '2027-05-10 21:02:05', '2022-11-11 00:17:53', NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 9),
(37, 'empower', 'Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals', '2', 'sin resolver', '2024-06-18 11:29:41', '2022-11-11 00:17:53', NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 10),
(38, 'optimize', 'New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016', '2', 'sin resolver', '2026-07-09 14:59:52', '2022-11-11 00:17:53', NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 10),
(39, 'enable', 'The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J', '2', 'sin resolver', '2027-11-25 16:45:18', '2022-11-11 00:17:53', NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 10),
(40, 'transition', 'Boston\'s most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles', '2', 'sin resolver', '2023-04-30 00:02:23', '2022-11-11 00:17:53', NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 10),
(41, 'integrate', 'New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016', '2', 'sin resolver', '2028-08-06 22:18:36', '2022-11-11 00:17:53', NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 11),
(42, 'orchestrate', 'Carbonite web goalkeeper gloves are ergonomically designed to give easy fit', '2', 'sin resolver', '2025-07-10 23:39:35', '2022-11-11 00:17:53', NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 11),
(43, 'monetize', 'The Football Is Good For Training And Recreational Purposes', '2', 'sin resolver', '2023-11-03 23:43:47', '2022-11-11 00:17:53', NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 11),
(44, 'synergize', 'Carbonite web goalkeeper gloves are ergonomically designed to give easy fit', '2', 'sin resolver', '2023-03-14 19:09:28', '2022-11-11 00:17:53', NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 11),
(45, 'seize', 'The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients', '2', 'sin resolver', '2027-02-16 14:08:10', '2022-11-11 00:17:53', NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 12),
(46, 'engineer', 'The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive', '2', 'sin resolver', '2026-05-25 21:38:38', '2022-11-11 00:17:53', NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 12),
(47, 'redefine', 'Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals', '2', 'sin resolver', '2027-01-20 00:35:57', '2022-11-11 00:17:53', NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 12),
(48, 'grow', 'Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals', '2', 'sin resolver', '2025-03-19 12:58:15', '2022-11-11 00:17:53', NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 12),
(49, 'incentivize', 'Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals', '2', 'sin resolver', '2024-08-11 03:50:01', '2022-11-11 00:17:53', NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 13),
(50, 'facilitate', 'Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support', '2', 'sin resolver', '2026-06-26 23:57:09', '2022-11-11 00:17:53', NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 13),
(51, 'streamline', 'The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design', '2', 'sin resolver', '2026-11-30 20:18:34', '2022-11-11 00:17:53', NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 13),
(52, 'envisioneer', 'The Football Is Good For Training And Recreational Purposes', '2', 'sin resolver', '2024-09-11 00:26:43', '2022-11-11 00:17:53', NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 13),
(53, 'iterate', 'New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016', '2', 'sin resolver', '2025-02-06 05:47:17', '2022-11-11 00:17:53', NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 14),
(54, 'cultivate', 'The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J', '2', 'sin resolver', '2029-11-24 07:29:02', '2022-11-11 00:17:53', NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 14),
(55, 'syndicate', 'Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support', '2', 'sin resolver', '2028-11-07 08:48:07', '2022-11-11 00:17:53', NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 14),
(56, 'seize', 'Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support', '2', 'sin resolver', '2026-12-13 05:48:29', '2022-11-11 00:17:53', NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 14),
(57, 'innovate', 'New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart', '2', 'sin resolver', '2027-04-18 22:43:19', '2022-11-11 00:17:53', NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 15),
(58, 'exploit', 'New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart', '2', 'sin resolver', '2026-11-14 06:35:35', '2022-11-11 00:17:53', NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 15),
(59, 'target', 'Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals', '2', 'sin resolver', '2029-05-30 22:33:35', '2022-11-11 00:17:53', NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 15),
(60, 'benchmark', 'The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive', '2', 'sin resolver', '2024-07-20 15:02:24', '2022-11-11 00:17:53', NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 15),
(61, 'productize', 'New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016', '2', 'sin resolver', '2024-09-12 03:24:44', '2022-11-11 00:17:53', NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 16),
(62, 'scale', 'The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients', '2', 'sin resolver', '2024-03-19 18:21:11', '2022-11-11 00:17:53', NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 16),
(63, 'optimize', 'Boston\'s most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles', '2', 'sin resolver', '2025-07-22 11:00:42', '2022-11-11 00:17:53', NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 16),
(64, 'morph', 'New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart', '2', 'sin resolver', '2029-08-06 22:51:44', '2022-11-11 00:17:53', NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 16);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `createdAt`, `updatedAt`) VALUES
(1, 'Victor', 'victor@hotmail.com', '$2b$10$TPLa4SnbpKr702vBtv6U7uOFNm9GaEJ/fp5ZTLaTQNtAoGaYfmyJi', '2022-11-11 00:16:36', '2022-11-11 00:16:36'),
(2, 'Daniela', 'daniela@hotmail.com', '$2b$10$ExJBmDpTXaR3UDZTp5ipVeKZIAky8lXUh0u/hSQY77z6c2ic4Cmd.', '2022-11-11 00:17:29', '2022-11-11 00:17:29'),
(3, 'Julieta', 'julieta@gmail.com', '$2b$10$GzCEYgFn6dRF4JybV1dMVO94h4KqyJUhmVuXVk0ALYWizJ70xJ4Re', '2022-11-11 00:17:52', '2022-11-11 00:17:52'),
(4, 'Andrea', 'andrea@gmail.com', '$2b$10$43OQtCZqcAB1Smv50zeBsudri65sTtkWBF8rpcfQkdVLWtPD5FHE.', '2022-11-11 00:17:52', '2022-11-11 00:17:52');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `lists_tasks`
--
ALTER TABLE `lists_tasks`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indices de la tabla `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indices de la tabla `seeds`
--
ALTER TABLE `seeds`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indices de la tabla `tasks`
--
ALTER TABLE `tasks`
  ADD PRIMARY KEY (`id`),
  ADD KEY `list_id` (`list_id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `lists_tasks`
--
ALTER TABLE `lists_tasks`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT de la tabla `tasks`
--
ALTER TABLE `tasks`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=65;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `lists_tasks`
--
ALTER TABLE `lists_tasks`
  ADD CONSTRAINT `lists_tasks_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Filtros para la tabla `tasks`
--
ALTER TABLE `tasks`
  ADD CONSTRAINT `tasks_ibfk_1` FOREIGN KEY (`list_id`) REFERENCES `lists_tasks` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
