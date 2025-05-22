-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 22, 2025 at 12:55 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `food_delivery`
--

-- --------------------------------------------------------

--
-- Table structure for table `contact`
--

CREATE TABLE `contact` (
  `Username` varchar(35) NOT NULL,
  `mobile-number` varchar(15) NOT NULL,
  `issue` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `contact`
--

INSERT INTO `contact` (`Username`, `mobile-number`, `issue`) VALUES
('Jasu', '7981629173', 'the issue is this socitydsssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss'),
('', '7981629173', 'i mkhjsfhjaghfjkalhdjxbcvgjvhscdgaeyuvcrf vgjxdgv'),
('', '7981629173', 'i mkhjsfhjaghfjkalhdjxbcvgjvhscdgaeyuvcrf vgjxdgv'),
('harsha', '9014709040', 'issuee');

-- --------------------------------------------------------

--
-- Table structure for table `delivery_activity`
--

CREATE TABLE `delivery_activity` (
  `id` int(11) NOT NULL,
  `dmobile` varchar(15) DEFAULT NULL,
  `start_time` datetime DEFAULT NULL,
  `end_time` datetime DEFAULT NULL,
  `duration_seconds` int(11) DEFAULT 0,
  `activity_date` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `delivery_activity`
--

INSERT INTO `delivery_activity` (`id`, `dmobile`, `start_time`, `end_time`, `duration_seconds`, `activity_date`) VALUES
(59, '9398927019', '2025-05-02 12:51:33', '2025-05-02 12:51:53', 20, '2025-05-02'),
(60, '9398927019', '2025-05-02 12:51:54', NULL, 0, '2025-05-02'),
(61, '9398927019', '2025-05-02 13:02:28', '2025-05-02 13:04:47', 139, '2025-05-02'),
(62, '9398927019', '2025-05-02 13:04:48', NULL, 0, '2025-05-02'),
(63, '9398927019', '2025-05-02 13:04:50', NULL, 0, '2025-05-02'),
(64, '9398927019', '2025-05-02 13:04:53', NULL, 0, '2025-05-02'),
(65, '9398927019', '2025-05-02 13:04:54', NULL, 0, '2025-05-02'),
(66, '9398927019', '2025-05-02 13:04:55', NULL, 0, '2025-05-02'),
(67, '9398927019', '2025-05-02 13:05:09', '2025-05-02 13:21:28', 979, '2025-05-02'),
(68, '9398927019', '2025-05-02 13:05:10', '2025-05-02 13:05:11', 1, '2025-05-02'),
(69, '9398927019', '2025-05-02 13:05:12', '2025-05-02 13:20:17', 905, '2025-05-02'),
(70, '9398927019', '2025-05-02 13:21:43', NULL, 0, '2025-05-02'),
(71, '9398927019', '2025-05-02 13:22:15', '2025-05-02 13:22:24', 9, '2025-05-02'),
(72, '9398927019', '2025-05-02 13:26:11', '2025-05-02 13:26:17', 6, '2025-05-02'),
(73, '9398927019', '2025-05-02 13:26:18', NULL, 0, '2025-05-02'),
(74, '9398927019', '2025-05-02 13:26:47', NULL, 0, '2025-05-02'),
(75, '9398927019', '2025-05-02 13:30:28', NULL, 0, '2025-05-02'),
(76, '9398927019', '2025-05-02 13:41:10', NULL, 0, '2025-05-02'),
(77, '9398927019', '2025-05-02 13:47:38', '2025-05-02 13:50:27', 169, '2025-05-02'),
(78, '9398927019', '2025-05-03 11:41:10', '2025-05-03 11:41:49', 39, '2025-05-03'),
(79, '9398927019', '2025-05-03 11:41:49', NULL, 0, '2025-05-03'),
(80, '9398927019', '2025-05-03 12:32:47', '2025-05-03 12:32:49', 2, '2025-05-03'),
(81, '9398927019', '2025-05-03 12:32:50', '2025-05-03 12:39:15', 385, '2025-05-03'),
(82, '9398927019', '2025-05-03 12:39:18', NULL, 0, '2025-05-03'),
(83, '9014709040', '2025-05-05 05:01:32', NULL, 0, '2025-05-05'),
(84, '9014709040', '2025-05-05 05:02:28', NULL, 0, '2025-05-05'),
(85, '9014709040', '2025-05-05 05:02:40', '2025-05-05 05:02:53', 13, '2025-05-05'),
(86, '9014709040', '2025-05-05 05:03:12', '2025-05-05 05:09:18', 366, '2025-05-05'),
(87, '9398927019', '2025-05-05 05:03:39', '2025-05-05 05:09:11', 332, '2025-05-05'),
(88, '9014709040', '2025-05-05 12:26:39', NULL, 0, '2025-05-05'),
(89, '9398927019', '2025-05-05 15:17:32', NULL, 0, '2025-05-05'),
(90, '9398927019', '2025-05-07 07:52:27', '2025-05-07 13:00:05', 18458, '2025-05-07'),
(91, '9398927019', '2025-05-10 05:28:35', '2025-05-10 05:28:38', 3, '2025-05-10'),
(92, '9398927019', '2025-05-10 05:28:39', NULL, 0, '2025-05-10'),
(93, '9398927019', '2025-05-10 05:33:49', '2025-05-10 05:33:52', 3, '2025-05-10'),
(94, '9398927019', '2025-05-10 05:33:53', '2025-05-10 07:14:30', 6037, '2025-05-10'),
(95, '9014709040', '2025-05-10 05:37:52', '2025-05-10 05:37:53', 1, '2025-05-10'),
(96, '9014709040', '2025-05-10 05:37:54', NULL, 0, '2025-05-10'),
(97, '', '2025-05-10 07:14:18', '2025-05-10 07:14:18', 0, '2025-05-10'),
(98, '9398927019', '2025-05-10 07:14:31', '2025-05-10 07:14:32', 1, '2025-05-10'),
(99, '9398927019', '2025-05-10 07:14:32', NULL, 0, '2025-05-10'),
(100, '9398927019', '2025-05-10 11:32:27', '2025-05-10 11:32:28', 1, '2025-05-10'),
(101, '9398927019', '2025-05-10 11:32:29', NULL, 0, '2025-05-10'),
(102, '9398927019', '2025-05-15 11:55:48', NULL, 0, '2025-05-15'),
(103, '9398927019', '2025-05-15 11:55:49', '2025-05-15 11:55:51', 2, '2025-05-15'),
(104, '9398927019', '2025-05-15 11:55:52', '2025-05-15 11:57:14', 82, '2025-05-15'),
(105, '9398927019', '2025-05-15 12:00:10', '2025-05-15 12:00:12', 2, '2025-05-15'),
(106, '9398927019', '2025-05-15 12:00:13', '2025-05-15 12:00:17', 4, '2025-05-15'),
(107, '9398927019', '2025-05-15 12:05:05', '2025-05-15 12:08:11', 186, '2025-05-15'),
(108, '9398927019', '2025-05-15 12:08:37', '2025-05-15 12:15:09', 392, '2025-05-15'),
(109, '9398927019', '2025-05-15 12:15:10', '2025-05-15 12:15:11', 1, '2025-05-15'),
(110, '9398927019', '2025-05-15 12:15:12', '2025-05-15 12:15:16', 4, '2025-05-15'),
(111, '9398927019', '2025-05-15 12:15:17', '2025-05-15 12:15:18', 1, '2025-05-15'),
(112, '9398927019', '2025-05-15 12:15:20', NULL, 0, '2025-05-15'),
(113, '9398927019', '2025-05-15 12:29:41', '2025-05-15 12:29:53', 12, '2025-05-15'),
(114, '9398927019', '2025-05-15 12:29:54', NULL, 0, '2025-05-15'),
(115, '9398927019', '2025-05-15 12:57:06', '2025-05-15 12:57:07', 1, '2025-05-15'),
(116, '9398927019', '2025-05-15 12:57:08', NULL, 0, '2025-05-15'),
(117, '9398927019', '2025-05-21 13:27:24', '2025-05-21 13:27:27', 3, '2025-05-21'),
(118, '9398927019', '2025-05-21 13:27:28', NULL, 0, '2025-05-21'),
(119, '9398927019', '2025-05-21 13:32:16', '2025-05-21 13:32:20', 4, '2025-05-21'),
(120, '9398927019', '2025-05-21 13:32:20', NULL, 0, '2025-05-21'),
(121, '9014709040', '2025-05-22 05:04:06', '2025-05-22 05:04:07', 1, '2025-05-22'),
(122, '9014709040', '2025-05-22 05:04:08', '2025-05-22 05:05:42', 94, '2025-05-22'),
(123, '9014709040', '2025-05-22 05:05:42', NULL, 0, '2025-05-22'),
(124, '9014709040', '2025-05-22 05:07:13', '2025-05-22 05:07:14', 1, '2025-05-22'),
(125, '9014709040', '2025-05-22 05:07:15', NULL, 0, '2025-05-22'),
(126, '9014709040', '2025-05-22 05:15:27', '2025-05-22 05:15:28', 1, '2025-05-22'),
(127, '9014709040', '2025-05-22 05:15:29', NULL, 0, '2025-05-22'),
(128, '9014709040', '2025-05-22 05:31:51', NULL, 0, '2025-05-22');

-- --------------------------------------------------------

--
-- Table structure for table `delivery_agent`
--

CREATE TABLE `delivery_agent` (
  `dmobile` bigint(10) NOT NULL,
  `dname` text NOT NULL,
  `dpassword` varchar(8) NOT NULL,
  `status` text NOT NULL,
  `orders` int(11) NOT NULL,
  `total_earnings` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `delivery_agent`
--

INSERT INTO `delivery_agent` (`dmobile`, `dname`, `dpassword`, `status`, `orders`, `total_earnings`) VALUES
(8977241079, 'Tharun', 'thar1079', 'inactive', 10, 100),
(9014709040, 'Harsha', 'Hars9040', 'inactive', 1, 0),
(9090909090, 'Ramu', 'Ramu0909', 'inactive', 90, 10),
(9398927019, 'PRUDVI', 'PRUD7019', 'active', 1000, 0);

-- --------------------------------------------------------

--
-- Table structure for table `items`
--

CREATE TABLE `items` (
  `item_id` int(11) NOT NULL,
  `item_name` text NOT NULL,
  `res_id` int(11) NOT NULL,
  `price` int(11) NOT NULL,
  `dprice` int(11) NOT NULL,
  `ratings` float NOT NULL,
  `rperson` int(11) NOT NULL,
  `available` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `items`
--

INSERT INTO `items` (`item_id`, `item_name`, `res_id`, `price`, `dprice`, `ratings`, `rperson`, `available`) VALUES
(701, 'Idli(3) & Sambar', 6901, 40, 60, 4.5, 120, 1),
(702, 'Vada(3) & Sambar', 6902, 30, 45, 4.3, 150, 1),
(703, 'Dosa', 6902, 50, 75, 4.7, 200, 1),
(704, 'Upma', 6901, 35, 52, 4.2, 80, 1),
(705, 'Gobi Rice', 6903, 70, 100, 4.6, 15, 1),
(706, 'Masala Dosa', 6904, 70, 105, 4.8, 250, 1),
(707, 'Rava Dosa', 6903, 65, 97, 4.6, 180, 1),
(708, 'Karam Dosa', 6904, 60, 90, 4.5, 140, 1),
(709, 'Gobi Rice', 6901, 80, 120, 4.7, 220, 1),
(710, 'Lemon Rice', 6902, 50, 75, 4.3, 130, 1),
(711, 'Rava Idli', 6905, 50, 80, 4.4, 20, 1),
(712, 'Chapathi(2)', 6905, 40, 70, 4.2, 15, 1),
(713, 'Poori(3)', 6902, 50, 90, 3.8, 4, 1),
(714, 'Onion Uttapam', 6904, 80, 120, 4.1, 9, 1),
(715, 'Veg rice', 6901, 100, 140, 4.2, 12, 1),
(716, 'Zeera rice', 6901, 120, 150, 4.3, 15, 1),
(717, 'Paneer Rice', 6905, 160, 200, 4.5, 14, 1),
(718, 'Kaju Rice', 6901, 165, 220, 4.5, 9, 1),
(719, 'Veg Noodles', 6903, 90, 140, 4.3, 10, 1),
(720, 'Gobi Noodles', 6903, 100, 150, 4.8, 15, 1),
(721, 'Paneer Noodles', 6903, 120, 180, 4.2, 8, 1),
(722, 'Gobi manchuria', 6902, 110, 160, 4.4, 13, 1),
(723, 'Paneer Butter Masala', 6902, 160, 220, 4.5, 14, 1),
(724, 'Curd Rice', 6905, 80, 110, 4.2, 16, 1),
(725, 'Onion Dosa', 6904, 70, 100, 4.2, 11, 1),
(726, 'dosaaa', 6905, 10, 300, 0, 0, 1),
(727, 'dosaaa', 6905, 10, 300, 0, 0, 1),
(728, 'dosaaa;', 6905, 10, 90, 0, 0, 0),
(729, 'dosaaa;;', 6905, 99, 900, 0, 0, 0),
(730, 'fjls', 6905, 324, 45245, 0, 0, 0),
(731, 'fasdfa', 6905, 453, 3423, 0, 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `most_ordered_items`
--

CREATE TABLE `most_ordered_items` (
  `mid` int(11) NOT NULL,
  `item_id` int(11) NOT NULL,
  `item_name` text NOT NULL,
  `res_id` int(11) NOT NULL,
  `price` int(11) NOT NULL,
  `dprice` int(11) NOT NULL,
  `ratings` float NOT NULL,
  `rperson` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `most_ordered_items`
--

INSERT INTO `most_ordered_items` (`mid`, `item_id`, `item_name`, `res_id`, `price`, `dprice`, `ratings`, `rperson`) VALUES
(1, 701, 'Idli', 6901, 40, 60, 4.5, 120),
(2, 702, 'Vada', 6902, 30, 45, 4.3, 150),
(3, 705, 'Gobi Rice', 6903, 70, 100, 4.6, 15),
(4, 706, 'Masala Dosa', 6904, 70, 105, 4.8, 250),
(5, 712, 'Chapathi', 6905, 50, 70, 4.5, 30);

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `order_id` varchar(17) NOT NULL,
  `mobile` bigint(10) NOT NULL,
  `username` text NOT NULL,
  `ptype` varchar(5) NOT NULL,
  `res_id` int(11) NOT NULL,
  `items` int(11) NOT NULL,
  `total` int(11) NOT NULL,
  `dtotal` int(11) NOT NULL,
  `dname` text NOT NULL,
  `dmobile` bigint(10) NOT NULL,
  `location` longtext NOT NULL,
  `status` text NOT NULL,
  `res_status` text NOT NULL DEFAULT 'requested',
  `Time` datetime NOT NULL DEFAULT current_timestamp(),
  `delivered_time` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`order_id`, `mobile`, `username`, `ptype`, `res_id`, `items`, `total`, `dtotal`, `dname`, `dmobile`, `location`, `status`, `res_status`, `Time`, `delivered_time`) VALUES
('ORD6979BW1G145546', 9652066979, 'Manvi', 'upi', 6905, 4, 660, 920, 'PRUDVI', 9398927019, 'https://www.google.com/maps/place/17.4358528+78.4400384', 'delivered', 'delivered', '2025-05-10 10:45:45', '2025-05-10 10:46:40'),
('ORD70191OVX692061', 9398927019, 'Prudvi', 'upi', 6901, 3, 175, 252, 'PRUDVI', 9398927019, 'https://www.google.com/maps/place/17.4358528+78.4400384', 'delivered', 'delivered', '2025-05-10 15:04:52', '2025-05-10 15:05:23'),
('ORD70194V78715710', 9398927019, 'Prudvi', '', 6901, 2, 75, 112, '', 0, 'https://www.google.com/maps/place/17.6920691+83.2425711', 'pending', 'requested', '2025-05-22 08:45:15', '2025-05-22 08:45:15'),
('ORD7019960T148950', 9398927019, 'Prudvi', '', 6905, 2, 210, 280, '', 0, 'https://www.google.com/maps/place/17.6920691+83.2425711', 'pending', 'requested', '2025-05-22 08:35:48', '2025-05-22 08:35:48'),
('ORD7019DRQX581888', 9398927019, 'Prudvi', 'cash', 6905, 2, 90, 150, 'PRUDVI', 9398927019, 'https://www.google.com/maps/place/17.4358528+78.4400384', 'delivered', 'delivered', '2025-05-10 15:03:01', '2025-05-10 15:03:18'),
('ORD7019I996091776', 9398927019, 'Prudvi', '', 6905, 2, 210, 280, '', 0, 'https://www.google.com/maps/place/17.6920691+83.2425711', 'pending', 'requested', '2025-05-22 08:34:51', '2025-05-22 08:34:51'),
('ORD7019JAOW279125', 9398927019, 'Prudvi', 'upi', 6905, 2, 90, 150, 'PRUDVI', 9398927019, 'https://www.google.com/maps/place/15.9128998+79.7399875', 'delivered', 'delivered', '2025-05-21 17:04:39', '2025-05-21 17:05:12'),
('ORD7019JOX6725083', 9398927019, 'Prudvi', 'cash', 6901, 2, 75, 112, 'Harsha', 9014709040, 'https://www.google.com/maps/place/17.6920691+83.2425711', 'delivered', 'delivered', '2025-05-22 09:02:05', '2025-05-22 09:04:33'),
('ORD7019MVCF182050', 9398927019, 'Prudvi', 'upi', 6905, 2, 90, 150, 'PRUDVI', 9398927019, 'https://www.google.com/maps/place/15.9128998+79.7399875', 'delivered', 'delivered', '2025-05-21 17:03:02', '2025-05-21 17:03:39'),
('ORD7019RCWT244362', 9398927019, 'Prudvi', '', 6905, 2, 210, 280, '', 0, 'https://www.google.com/maps/place/17.6920691+83.2425711', 'pending', 'requested', '2025-05-22 08:37:24', '2025-05-22 08:37:24'),
('ORD7019WLX9036749', 9398927019, 'Prudvi', '', 6905, 2, 210, 280, '', 0, 'https://www.google.com/maps/place/17.6920691+83.2425711', 'pending', 'requested', '2025-05-22 08:33:56', '2025-05-22 08:33:56'),
('ORD77773BKP816776', 7777777777, 'jesari', 'upi', 6905, 1, 40, 70, 'PRUDVI', 9398927019, 'https://www.google.com/maps/place/14.6941362+77.5991921', 'delivered', 'delivered', '2025-05-21 16:56:56', '2025-05-21 17:03:39'),
('ORD77775GN5422647', 7777777777, 'jesari', 'upi', 6905, 1, 10, 90, 'PRUDVI', 9398927019, 'https://www.google.com/maps/place/17.6920691+83.2425711', 'delivered', 'delivered', '2025-05-15 16:23:42', '2025-05-15 16:24:18'),
('ORD7777E1Y0995820', 7777777777, 'jesari', 'cash', 6905, 1, 40, 70, 'PRUDVI', 9398927019, 'https://www.google.com/maps/place/17.6920691+83.2425711', 'delivered', 'delivered', '2025-05-15 15:26:35', '2025-05-15 15:27:03'),
('ORD7777F11D182362', 7777777777, 'jesari', 'cash', 6905, 1, 40, 70, 'PRUDVI', 9398927019, 'https://www.google.com/maps/place/17.6920691+83.2425711', 'delivered', 'delivered', '2025-05-15 16:03:02', '2025-05-15 16:10:04'),
('ORD7777J3G6135358', 7777777777, 'jesari', 'cash', 6905, 1, 40, 70, 'PRUDVI', 9398927019, 'https://www.google.com/maps/place/17.4358528+78.4400384', 'delivered', 'delivered', '2025-05-10 09:05:35', '2025-05-10 09:13:38'),
('ORD7777KMEQ049009', 7777777777, 'jesari', 'cash', 6905, 1, 40, 70, 'PRUDVI', 9398927019, 'https://www.google.com/maps/place/17.4358528+78.4400384', 'delivered', 'delivered', '2025-05-10 09:04:09', '2025-05-10 09:04:33'),
('ORD7777LJT3501147', 7777777777, 'jesari', 'upi', 6905, 1, 40, 70, 'PRUDVI', 9398927019, 'https://www.google.com/maps/place/17.6920691+83.2425711', 'delivered', 'delivered', '2025-05-15 15:35:01', '2025-05-15 15:35:29'),
('ORD7777QKWR814849', 7777777777, 'jesari', 'cash', 6905, 1, 10, 90, 'PRUDVI', 9398927019, 'https://www.google.com/maps/place/17.6920691+83.2425711', 'delivered', 'delivered', '2025-05-15 16:30:14', '2025-05-15 16:31:23'),
('ORD7777QXG1660756', 7777777777, 'jesari', 'cash', 6905, 1, 10, 90, 'PRUDVI', 9398927019, 'https://www.google.com/maps/place/17.6920691+83.2425711', 'delivered', 'delivered', '2025-05-15 16:27:40', '2025-05-15 16:28:00'),
('ORD7777U7N3019902', 7777777777, 'jesari', 'upi', 6905, 1, 40, 70, 'PRUDVI', 9398927019, 'https://www.google.com/maps/place/17.6920691+83.2425711', 'delivered', 'delivered', '2025-05-15 16:00:19', '2025-05-15 16:01:03'),
('ORD7777W9E4172549', 7777777777, 'jesari', 'cash', 6905, 10, 1236, 50718, 'PRUDVI', 9398927019, 'https://www.google.com/maps/place/17.6920691+83.2425711', 'delivered', 'delivered', '2025-05-15 16:19:32', '2025-05-15 16:22:56'),
('ORD7777WEQQ526039', 7777777777, 'jesari', 'cash', 6905, 1, 10, 90, 'PRUDVI', 9398927019, 'https://www.google.com/maps/place/17.6920691+83.2425711', 'delivered', 'delivered', '2025-05-15 16:25:26', '2025-05-15 16:25:44'),
('ORD7777X59Y282388', 7777777777, 'jesari', 'cash', 6905, 1, 40, 70, 'Harsha', 9014709040, 'https://www.google.com/maps/place/17.4358528+78.4400384', 'delivered', 'delivered', '2025-05-10 09:08:02', '2025-05-10 09:13:44'),
('ORD7777Z6DS652300', 7777777777, 'jesari', 'cash', 6905, 7, 1117, 49428, 'PRUDVI', 9398927019, 'https://www.google.com/maps/place/17.6920691+83.2425711', 'delivered', 'delivered', '2025-05-15 16:10:52', '2025-05-15 16:18:55'),
('ORD90407TJW447145', 9014709040, 'Harsha Vardhan', 'cash', 6901, 1, 40, 60, 'PRUDVI', 9398927019, 'https://www.google.com/maps/place/17.6868159+83.2184815', 'delivered', 'accept', '2025-05-07 16:27:27', '2025-05-07 16:28:11'),
('ORD9040AM4A763765', 9014709040, 'Harsha Vardhan', '', 6901, 1, 40, 60, '', 0, 'https://www.google.com/maps/place/17.6920691+83.2425711', 'pending', 'requested', '2025-05-22 08:46:03', '2025-05-22 08:46:03'),
('ORD9040GVUZ531586', 9014709040, 'Harsha Vardhan', 'upi', 6901, 1, 40, 60, 'PRUDVI', 9398927019, 'https://www.google.com/maps/place/17.6868159+83.2184815', 'delivered', 'accept', '2025-05-07 16:28:51', '2025-05-07 16:29:50');

-- --------------------------------------------------------

--
-- Table structure for table `orders_status`
--

CREATE TABLE `orders_status` (
  `sno` int(11) NOT NULL,
  `order_id` varchar(17) NOT NULL,
  `dmobile` bigint(10) NOT NULL,
  `res_id` int(11) NOT NULL,
  `res_name` mediumtext NOT NULL,
  `res_location` text NOT NULL,
  `username` text NOT NULL,
  `mobile` bigint(10) NOT NULL,
  `location` text NOT NULL,
  `total` int(11) NOT NULL,
  `status` text NOT NULL,
  `time` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `orders_status`
--

INSERT INTO `orders_status` (`sno`, `order_id`, `dmobile`, `res_id`, `res_name`, `res_location`, `username`, `mobile`, `location`, `total`, `status`, `time`) VALUES
(347, 'ORD90407TJW447145', 9398927019, 6901, 'Saarangi Fine Dine restaurant', 'https://maps.app.goo.gl/8QuPibsDuQPJAk9S9', 'Harsha Vardhan', 9014709040, 'https://www.google.com/maps/place/17.6868159+83.2184815', 40, 'delivered', '2025-05-07 16:27:27'),
(348, 'ORD9040GVUZ531586', 9398927019, 6901, 'Saarangi Fine Dine restaurant', 'https://maps.app.goo.gl/8QuPibsDuQPJAk9S9', 'Harsha Vardhan', 9014709040, 'https://www.google.com/maps/place/17.6868159+83.2184815', 40, 'delivered', '2025-05-07 16:28:51'),
(350, 'ORD7777KMEQ049009', 9398927019, 6905, 'Mahesh Family Restaurant', 'https://maps.app.goo.gl/YGJNNp2M6tKSbi2k8', 'jesari', 7777777777, 'https://www.google.com/maps/place/17.4358528+78.4400384', 40, 'delivered', '2025-05-10 09:04:09'),
(351, 'ORD7777J3G6135358', 9398927019, 6905, 'Mahesh Family Restaurant', 'https://maps.app.goo.gl/YGJNNp2M6tKSbi2k8', 'jesari', 7777777777, 'https://www.google.com/maps/place/17.4358528+78.4400384', 40, 'delivered', '2025-05-10 09:05:35'),
(352, 'ORD7777X59Y282388', 9014709040, 6905, 'Mahesh Family Restaurant', 'https://maps.app.goo.gl/YGJNNp2M6tKSbi2k8', 'jesari', 7777777777, 'https://www.google.com/maps/place/17.4358528+78.4400384', 40, 'delivered', '2025-05-10 09:08:02'),
(353, 'ORD6979BW1G145546', 9398927019, 6905, 'Mahesh Family Restaurant', 'https://maps.app.goo.gl/YGJNNp2M6tKSbi2k8', 'Manvi', 9652066979, 'https://www.google.com/maps/place/17.4358528+78.4400384', 660, 'delivered', '2025-05-10 10:45:45'),
(354, 'ORD7019DRQX581888', 9398927019, 6905, 'Mahesh Family Restaurant', 'https://maps.app.goo.gl/YGJNNp2M6tKSbi2k8', 'Prudvi', 9398927019, 'https://www.google.com/maps/place/17.4358528+78.4400384', 90, 'delivered', '2025-05-10 15:03:02'),
(355, 'ORD70191OVX692061', 9398927019, 6901, 'Saarangi Fine Dine restaurant', 'https://maps.app.goo.gl/8QuPibsDuQPJAk9S9', 'Prudvi', 9398927019, 'https://www.google.com/maps/place/17.4358528+78.4400384', 175, 'delivered', '2025-05-10 15:04:52'),
(356, 'ORD7777E1Y0995820', 9398927019, 6905, 'Mahesh Family Restaurant', 'https://maps.app.goo.gl/YGJNNp2M6tKSbi2k8', 'jesari', 7777777777, 'https://www.google.com/maps/place/17.6920691+83.2425711', 40, 'delivered', '2025-05-15 15:26:35'),
(357, 'ORD7777LJT3501147', 9398927019, 6905, 'Mahesh Family Restaurant', 'https://maps.app.goo.gl/YGJNNp2M6tKSbi2k8', 'jesari', 7777777777, 'https://www.google.com/maps/place/17.6920691+83.2425711', 40, 'delivered', '2025-05-15 15:35:05'),
(358, 'ORD7777U7N3019902', 9398927019, 6905, 'Mahesh Family Restaurant', 'https://maps.app.goo.gl/YGJNNp2M6tKSbi2k8', 'jesari', 7777777777, 'https://www.google.com/maps/place/17.6920691+83.2425711', 40, 'delivered', '2025-05-15 16:00:20'),
(359, 'ORD7777F11D182362', 9398927019, 6905, 'Mahesh Family Restaurant', 'https://maps.app.goo.gl/YGJNNp2M6tKSbi2k8', 'jesari', 7777777777, 'https://www.google.com/maps/place/17.6920691+83.2425711', 40, 'delivered', '2025-05-15 16:03:02'),
(360, 'ORD7777Z6DS652300', 9398927019, 6905, 'Mahesh Family Restaurant', 'https://maps.app.goo.gl/YGJNNp2M6tKSbi2k8', 'jesari', 7777777777, 'https://www.google.com/maps/place/17.6920691+83.2425711', 1117, 'delivered', '2025-05-15 16:10:52'),
(361, 'ORD7777W9E4172549', 9398927019, 6905, 'Mahesh Family Restaurant', 'https://maps.app.goo.gl/YGJNNp2M6tKSbi2k8', 'jesari', 7777777777, 'https://www.google.com/maps/place/17.6920691+83.2425711', 1236, 'delivered', '2025-05-15 16:19:32'),
(362, 'ORD77775GN5422647', 9398927019, 6905, 'Mahesh Family Restaurant', 'https://maps.app.goo.gl/YGJNNp2M6tKSbi2k8', 'jesari', 7777777777, 'https://www.google.com/maps/place/17.6920691+83.2425711', 10, 'delivered', '2025-05-15 16:23:42'),
(363, 'ORD7777WEQQ526039', 9398927019, 6905, 'Mahesh Family Restaurant', 'https://maps.app.goo.gl/YGJNNp2M6tKSbi2k8', 'jesari', 7777777777, 'https://www.google.com/maps/place/17.6920691+83.2425711', 10, 'delivered', '2025-05-15 16:25:26'),
(364, 'ORD7777QXG1660756', 9398927019, 6905, 'Mahesh Family Restaurant', 'https://maps.app.goo.gl/YGJNNp2M6tKSbi2k8', 'jesari', 7777777777, 'https://www.google.com/maps/place/17.6920691+83.2425711', 10, 'delivered', '2025-05-15 16:27:40'),
(365, 'ORD7777QKWR814849', 9398927019, 6905, 'Mahesh Family Restaurant', 'https://maps.app.goo.gl/YGJNNp2M6tKSbi2k8', 'jesari', 7777777777, 'https://www.google.com/maps/place/17.6920691+83.2425711', 10, 'delivered', '2025-05-15 16:30:15'),
(366, 'ORD77773BKP816776', 9398927019, 6905, 'Mahesh Family Restaurant', 'https://maps.app.goo.gl/YGJNNp2M6tKSbi2k8', 'jesari', 7777777777, 'https://www.google.com/maps/place/14.6941362+77.5991921', 40, 'delivered', '2025-05-21 16:57:30'),
(367, 'ORD7019MVCF182050', 9398927019, 6905, 'Mahesh Family Restaurant', 'https://maps.app.goo.gl/YGJNNp2M6tKSbi2k8', 'Prudvi', 9398927019, 'https://www.google.com/maps/place/15.9128998+79.7399875', 90, 'delivered', '2025-05-21 17:03:02'),
(368, 'ORD7019JAOW279125', 9398927019, 6905, 'Mahesh Family Restaurant', 'https://maps.app.goo.gl/YGJNNp2M6tKSbi2k8', 'Prudvi', 9398927019, 'https://www.google.com/maps/place/15.9128998+79.7399875', 90, 'delivered', '2025-05-21 17:04:39'),
(369, 'ORD7019WLX9036749', 9398927019, 6905, 'Mahesh Family Restaurant', 'https://maps.app.goo.gl/YGJNNp2M6tKSbi2k8', 'Prudvi', 9398927019, 'https://www.google.com/maps/place/17.6920691+83.2425711', 210, 'pending', '2025-05-22 08:33:56'),
(370, 'ORD7019I996091776', 9398927019, 6905, 'Mahesh Family Restaurant', 'https://maps.app.goo.gl/YGJNNp2M6tKSbi2k8', 'Prudvi', 9398927019, 'https://www.google.com/maps/place/17.6920691+83.2425711', 210, 'pending', '2025-05-22 08:34:51'),
(371, 'ORD7019960T148950', 9398927019, 6905, 'Mahesh Family Restaurant', 'https://maps.app.goo.gl/YGJNNp2M6tKSbi2k8', 'Prudvi', 9398927019, 'https://www.google.com/maps/place/17.6920691+83.2425711', 210, 'pending', '2025-05-22 08:35:49'),
(372, 'ORD7019RCWT244362', 9398927019, 6905, 'Mahesh Family Restaurant', 'https://maps.app.goo.gl/YGJNNp2M6tKSbi2k8', 'Prudvi', 9398927019, 'https://www.google.com/maps/place/17.6920691+83.2425711', 210, 'pending', '2025-05-22 08:37:24'),
(373, 'ORD70194V78715710', 9398927019, 6901, 'Saarangi Fine Dine restaurant', 'https://maps.app.goo.gl/8QuPibsDuQPJAk9S9', 'Prudvi', 9398927019, 'https://www.google.com/maps/place/17.6920691+83.2425711', 75, 'pending', '2025-05-22 08:45:15'),
(374, 'ORD9040AM4A763765', 9398927019, 6901, 'Saarangi Fine Dine restaurant', 'https://maps.app.goo.gl/8QuPibsDuQPJAk9S9', 'Harsha Vardhan', 9014709040, 'https://www.google.com/maps/place/17.6920691+83.2425711', 40, 'pending', '2025-05-22 08:46:03'),
(375, 'ORD7019JOX6725083', 9014709040, 6901, 'Saarangi Fine Dine restaurant', 'https://maps.app.goo.gl/8QuPibsDuQPJAk9S9', 'Prudvi', 9398927019, 'https://www.google.com/maps/place/17.6920691+83.2425711', 75, 'delivered', '2025-05-22 09:02:05');

-- --------------------------------------------------------

--
-- Table structure for table `order_items`
--

CREATE TABLE `order_items` (
  `sno` int(11) NOT NULL,
  `order_id` varchar(17) NOT NULL,
  `item_id` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `price` int(11) NOT NULL,
  `dprice` int(11) NOT NULL,
  `created at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `order_items`
--

INSERT INTO `order_items` (`sno`, `order_id`, `item_id`, `quantity`, `price`, `dprice`, `created at`) VALUES
(2238, 'ORD90407TJW447145', 701, 1, 40, 60, '2025-05-07 16:27:27'),
(2239, 'ORD9040GVUZ531586', 701, 1, 40, 60, '2025-05-07 16:28:51'),
(2241, 'ORD7777KMEQ049009', 712, 1, 40, 70, '2025-05-10 09:04:09'),
(2242, 'ORD7777J3G6135358', 712, 1, 40, 70, '2025-05-10 09:05:35'),
(2243, 'ORD7777X59Y282388', 712, 1, 40, 70, '2025-05-10 09:08:02'),
(2244, 'ORD6979BW1G145546', 711, 2, 50, 80, '2025-05-10 10:45:45'),
(2245, 'ORD6979BW1G145546', 712, 2, 40, 70, '2025-05-10 10:45:45'),
(2246, 'ORD6979BW1G145546', 724, 2, 80, 110, '2025-05-10 10:45:45'),
(2247, 'ORD6979BW1G145546', 717, 2, 160, 200, '2025-05-10 10:45:45'),
(2248, 'ORD7019DRQX581888', 711, 1, 50, 80, '2025-05-10 15:03:01'),
(2249, 'ORD7019DRQX581888', 712, 1, 40, 70, '2025-05-10 15:03:01'),
(2250, 'ORD70191OVX692061', 701, 1, 40, 60, '2025-05-10 15:04:52'),
(2251, 'ORD70191OVX692061', 704, 1, 35, 52, '2025-05-10 15:04:52'),
(2252, 'ORD70191OVX692061', 715, 1, 100, 140, '2025-05-10 15:04:52'),
(2253, 'ORD7777E1Y0995820', 712, 1, 40, 70, '2025-05-15 15:26:35'),
(2254, 'ORD7777LJT3501147', 712, 1, 40, 70, '2025-05-15 15:35:01'),
(2255, 'ORD7777U7N3019902', 712, 1, 40, 70, '2025-05-15 16:00:19'),
(2256, 'ORD7777F11D182362', 712, 1, 40, 70, '2025-05-15 16:03:02'),
(2257, 'ORD7777Z6DS652300', 712, 1, 40, 70, '2025-05-15 16:10:52'),
(2258, 'ORD7777Z6DS652300', 730, 1, 324, 45245, '2025-05-15 16:10:52'),
(2259, 'ORD7777Z6DS652300', 731, 1, 453, 3423, '2025-05-15 16:10:52'),
(2260, 'ORD7777Z6DS652300', 726, 1, 10, 300, '2025-05-15 16:10:52'),
(2261, 'ORD7777Z6DS652300', 717, 1, 160, 200, '2025-05-15 16:10:52'),
(2262, 'ORD7777Z6DS652300', 711, 1, 50, 80, '2025-05-15 16:10:52'),
(2263, 'ORD7777Z6DS652300', 724, 1, 80, 110, '2025-05-15 16:10:52'),
(2264, 'ORD7777W9E4172549', 712, 1, 40, 70, '2025-05-15 16:19:32'),
(2265, 'ORD7777W9E4172549', 730, 1, 324, 45245, '2025-05-15 16:19:32'),
(2266, 'ORD7777W9E4172549', 731, 1, 453, 3423, '2025-05-15 16:19:32'),
(2267, 'ORD7777W9E4172549', 726, 1, 10, 300, '2025-05-15 16:19:32'),
(2268, 'ORD7777W9E4172549', 717, 1, 160, 200, '2025-05-15 16:19:32'),
(2269, 'ORD7777W9E4172549', 711, 1, 50, 80, '2025-05-15 16:19:32'),
(2270, 'ORD7777W9E4172549', 724, 1, 80, 110, '2025-05-15 16:19:32'),
(2271, 'ORD7777W9E4172549', 727, 1, 10, 300, '2025-05-15 16:19:32'),
(2272, 'ORD7777W9E4172549', 729, 1, 99, 900, '2025-05-15 16:19:32'),
(2273, 'ORD7777W9E4172549', 728, 1, 10, 90, '2025-05-15 16:19:32'),
(2274, 'ORD77775GN5422647', 728, 1, 10, 90, '2025-05-15 16:23:42'),
(2275, 'ORD7777WEQQ526039', 728, 1, 10, 90, '2025-05-15 16:25:26'),
(2276, 'ORD7777QXG1660756', 728, 1, 10, 90, '2025-05-15 16:27:40'),
(2277, 'ORD7777QKWR814849', 728, 1, 10, 90, '2025-05-15 16:30:14'),
(2278, 'ORD77773BKP816776', 712, 1, 40, 70, '2025-05-21 16:56:56'),
(2279, 'ORD7019MVCF182050', 711, 1, 50, 80, '2025-05-21 17:03:02'),
(2280, 'ORD7019MVCF182050', 712, 1, 40, 70, '2025-05-21 17:03:02'),
(2281, 'ORD7019JAOW279125', 711, 1, 50, 80, '2025-05-21 17:04:39'),
(2282, 'ORD7019JAOW279125', 712, 1, 40, 70, '2025-05-21 17:04:39'),
(2283, 'ORD7019WLX9036749', 711, 1, 50, 80, '2025-05-22 08:33:56'),
(2284, 'ORD7019WLX9036749', 717, 1, 160, 200, '2025-05-22 08:33:56'),
(2285, 'ORD7019I996091776', 711, 1, 50, 80, '2025-05-22 08:34:51'),
(2286, 'ORD7019I996091776', 717, 1, 160, 200, '2025-05-22 08:34:51'),
(2287, 'ORD7019960T148950', 711, 1, 50, 80, '2025-05-22 08:35:48'),
(2288, 'ORD7019960T148950', 717, 1, 160, 200, '2025-05-22 08:35:48'),
(2289, 'ORD7019RCWT244362', 711, 1, 50, 80, '2025-05-22 08:37:24'),
(2290, 'ORD7019RCWT244362', 717, 1, 160, 200, '2025-05-22 08:37:24'),
(2291, 'ORD70194V78715710', 701, 1, 40, 60, '2025-05-22 08:45:15'),
(2292, 'ORD70194V78715710', 704, 1, 35, 52, '2025-05-22 08:45:15'),
(2293, 'ORD9040AM4A763765', 701, 1, 40, 60, '2025-05-22 08:46:03'),
(2294, 'ORD7019JOX6725083', 701, 1, 40, 60, '2025-05-22 09:02:05'),
(2295, 'ORD7019JOX6725083', 704, 1, 35, 52, '2025-05-22 09:02:05');

-- --------------------------------------------------------

--
-- Table structure for table `restaurants`
--

CREATE TABLE `restaurants` (
  `res_id` int(11) NOT NULL,
  `password` varchar(8) NOT NULL,
  `res_name` mediumtext NOT NULL,
  `ratings` float NOT NULL,
  `res_location` text NOT NULL,
  `best_item` int(11) NOT NULL,
  `offer` mediumtext NOT NULL,
  `status` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `restaurants`
--

INSERT INTO `restaurants` (`res_id`, `password`, `res_name`, `ratings`, `res_location`, `best_item`, `offer`, `status`) VALUES
(6901, 'saar6901', 'Saarangi Fine Dine restaurant', 3.9, 'https://maps.app.goo.gl/8QuPibsDuQPJAk9S9', 701, 'Starts at ₹40', 'inactive'),
(6902, 'sout6902', 'Southern Spice', 4.3, 'https://maps.app.goo.gl/YGJNNp2M6tKSbi2k8', 702, 'Starts at ₹70', 'inactive'),
(6903, 'sril6903', 'Sri Lakshmi Varaha Hotel', 4.1, 'https://maps.app.goo.gl/YGJNNp2M6tKSbi2k8', 705, 'Starts at ₹80', 'inactive'),
(6904, 'gufh6904', 'Gufha Restaurant', 4.6, 'https://maps.app.goo.gl/YGJNNp2M6tKSbi2k8', 706, 'Starts at ₹90', 'inactive'),
(6905, 'mahe6905', 'Mahesh Family Restaurant', 4.5, 'https://maps.app.goo.gl/YGJNNp2M6tKSbi2k8', 703, 'Starts at ₹90', 'inactive');

-- --------------------------------------------------------

--
-- Table structure for table `reviews`
--

CREATE TABLE `reviews` (
  `order_id` varchar(20) NOT NULL,
  `username` varchar(69) NOT NULL,
  `mobile` int(10) NOT NULL,
  `stars` int(5) NOT NULL,
  `description` varchar(300) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `reviews`
--

INSERT INTO `reviews` (`order_id`, `username`, `mobile`, `stars`, `description`) VALUES
('ORD7019JAOW279125', 'prudvi', 1111111111, 5, 'nx,cZXnc,zxcnskdf'),
('ORD7019JAOW279125', 'prudvi', 1111111111, 5, 'nx,cZXnc,zxcnskdf');

-- --------------------------------------------------------

--
-- Table structure for table `search_items`
--

CREATE TABLE `search_items` (
  `Sno` int(11) NOT NULL,
  `item_name` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `search_items`
--

INSERT INTO `search_items` (`Sno`, `item_name`) VALUES
(1, 'Idli'),
(2, 'Dosa'),
(3, 'Vada'),
(4, 'Upma'),
(5, 'Pongal'),
(6, 'Rice Items'),
(7, 'Noodles'),
(8, 'Uttapam'),
(9, 'Gobi Rice'),
(10, 'Curd Rice'),
(11, 'Roti'),
(12, 'Chapathi');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `mobile` bigint(10) NOT NULL,
  `name` text NOT NULL,
  `email` text NOT NULL,
  `room_no` text NOT NULL,
  `area` text NOT NULL,
  `landmark` text NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`mobile`, `name`, `email`, `room_no`, `area`, `landmark`, `created_at`) VALUES
(6304506106, 'PRASANTH', '', '12-2', 'railway colony,tirupati', 'NTR auto stand', '2025-03-31 16:18:53'),
(7187270173, 'reddy', '', 'wwa', 'sgfaf', 'gds', '2025-03-31 19:14:58'),
(7729842970, 'K Varalakshmi', '', 'Room no 2332', 'Varaha Nivasam', 'Near Vengamamba Annaprasadham', '2025-03-30 20:57:34'),
(7777777777, 'jesari', 'kjflja@gmi.com', 'aaasda', 'asdf', 'asslkdfadczd', '2025-04-29 11:35:10'),
(8341734115, 'mohan', '', 'efevbfv', 'efevffv', 'evfevfefv', '2025-04-07 11:32:28'),
(9014709040, 'Harsha Vardhan', 'harsha@gmail.com', 'Room no 6969', 'Vishnu Nivasam', 'Near Railway station', '2025-03-02 10:27:18'),
(9090909090, 'jlfsflka', '', '', '', '', '2025-04-29 11:22:38'),
(9398927019, 'Prudvi', 'Prudvi@ceo.com', '5-302, bharat bekary line', 'sri nagar colony, bethamcherla', 'manohar store', '2025-03-23 11:46:34'),
(9494801709, 'venki', '', 'xfedx', 'rbgr', 'bgr', '2025-04-29 06:48:06'),
(9515219340, 'K PRASAD', '', 'K.T Road', 'Tirupati', 'TTD AD Building', '2025-04-21 14:29:55'),
(9550744529, 'Pulivendula vijay', '', '2/168', 'kt road ', 'saimedagate', '2025-03-31 19:04:12'),
(9652066979, 'Manvi', '', 'narasapuram', 'veldurthi', 'chitamanu', '2025-05-10 10:44:58'),
(9848247279, 'jagan', 'jaganachari2006@gmail.com', 'hghj', 'hjvjy', 'yfyvjh', '2025-03-28 22:08:36');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `delivery_activity`
--
ALTER TABLE `delivery_activity`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `delivery_agent`
--
ALTER TABLE `delivery_agent`
  ADD PRIMARY KEY (`dmobile`);

--
-- Indexes for table `items`
--
ALTER TABLE `items`
  ADD PRIMARY KEY (`item_id`),
  ADD KEY `res_id` (`res_id`);

--
-- Indexes for table `most_ordered_items`
--
ALTER TABLE `most_ordered_items`
  ADD PRIMARY KEY (`mid`),
  ADD KEY `res_id` (`res_id`),
  ADD KEY `item_id` (`item_id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`order_id`);

--
-- Indexes for table `orders_status`
--
ALTER TABLE `orders_status`
  ADD PRIMARY KEY (`sno`),
  ADD KEY `fk_order_id` (`order_id`);

--
-- Indexes for table `order_items`
--
ALTER TABLE `order_items`
  ADD PRIMARY KEY (`sno`),
  ADD UNIQUE KEY `mobile` (`order_id`,`item_id`);

--
-- Indexes for table `restaurants`
--
ALTER TABLE `restaurants`
  ADD PRIMARY KEY (`res_id`);

--
-- Indexes for table `search_items`
--
ALTER TABLE `search_items`
  ADD PRIMARY KEY (`Sno`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`mobile`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `delivery_activity`
--
ALTER TABLE `delivery_activity`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=129;

--
-- AUTO_INCREMENT for table `items`
--
ALTER TABLE `items`
  MODIFY `item_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=732;

--
-- AUTO_INCREMENT for table `most_ordered_items`
--
ALTER TABLE `most_ordered_items`
  MODIFY `mid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `orders_status`
--
ALTER TABLE `orders_status`
  MODIFY `sno` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=376;

--
-- AUTO_INCREMENT for table `order_items`
--
ALTER TABLE `order_items`
  MODIFY `sno` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2296;

--
-- AUTO_INCREMENT for table `search_items`
--
ALTER TABLE `search_items`
  MODIFY `Sno` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `items`
--
ALTER TABLE `items`
  ADD CONSTRAINT `items_ibfk_1` FOREIGN KEY (`res_id`) REFERENCES `restaurants` (`res_id`),
  ADD CONSTRAINT `items_ibfk_2` FOREIGN KEY (`res_id`) REFERENCES `restaurants` (`res_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `most_ordered_items`
--
ALTER TABLE `most_ordered_items`
  ADD CONSTRAINT `most_ordered_items_ibfk_1` FOREIGN KEY (`res_id`) REFERENCES `restaurants` (`res_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `most_ordered_items_ibfk_2` FOREIGN KEY (`item_id`) REFERENCES `items` (`item_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `orders_status`
--
ALTER TABLE `orders_status`
  ADD CONSTRAINT `fk_ordddid` FOREIGN KEY (`order_id`) REFERENCES `orders` (`order_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_orddid` FOREIGN KEY (`order_id`) REFERENCES `orders` (`order_id`),
  ADD CONSTRAINT `fk_order_id` FOREIGN KEY (`order_id`) REFERENCES `orders` (`order_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `order_items`
--
ALTER TABLE `order_items`
  ADD CONSTRAINT `fk_order` FOREIGN KEY (`order_id`) REFERENCES `orders` (`order_id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
