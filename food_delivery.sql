-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 22, 2025 at 07:13 AM
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
CREATE DATABASE IF NOT EXISTS `food_delivery` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `food_delivery`;

-- --------------------------------------------------------

--
-- Table structure for table `delivery_activities`
--

CREATE TABLE `delivery_activities` (
  `sno` int(11) NOT NULL,
  `dmobile` bigint(10) NOT NULL,
  `orders` int(11) NOT NULL,
  `earnings` int(11) NOT NULL,
  `time` int(11) NOT NULL,
  `date` date NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

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
(9398927019, 'PRUDVI', 'PRUD7019', 'inactive', 1000, 0);

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
  `rperson` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `items`
--

INSERT INTO `items` (`item_id`, `item_name`, `res_id`, `price`, `dprice`, `ratings`, `rperson`) VALUES
(701, 'Idli(3) & Sambar', 6901, 40, 60, 4.5, 120),
(702, 'Vada(3) & Sambar', 6902, 30, 45, 4.3, 150),
(703, 'Dosa', 6902, 50, 75, 4.7, 200),
(704, 'Upma', 6901, 35, 52, 4.2, 80),
(705, 'Gobi Rice', 6903, 70, 100, 4.6, 15),
(706, 'Masala Dosa', 6904, 70, 105, 4.8, 250),
(707, 'Rava Dosa', 6903, 65, 97, 4.6, 180),
(708, 'Karam Dosa', 6904, 60, 90, 4.5, 140),
(709, 'Gobi Rice', 6901, 80, 120, 4.7, 220),
(710, 'Lemon Rice', 6902, 50, 75, 4.3, 130),
(711, 'Rava Idli', 6905, 50, 80, 4.4, 20),
(712, 'Chapathi(2)', 6905, 40, 70, 4.2, 15),
(713, 'Poori(3)', 6902, 50, 90, 3.8, 4),
(714, 'Onion Uttapam', 6904, 80, 120, 4.1, 9),
(715, 'Veg rice', 6901, 100, 140, 4.2, 12),
(716, 'Zeera rice', 6901, 120, 150, 4.3, 15),
(717, 'Paneer Rice', 6905, 160, 200, 4.5, 14),
(718, 'Kaju Rice', 6901, 165, 220, 4.5, 9),
(719, 'Veg Noodles', 6903, 90, 140, 4.3, 10),
(720, 'Gobi Noodles', 6903, 100, 150, 4.8, 15),
(721, 'Paneer Noodles', 6903, 120, 180, 4.2, 8),
(722, 'Gobi manchuria', 6902, 110, 160, 4.4, 13),
(723, 'Paneer Butter Masala', 6902, 160, 220, 4.5, 14),
(724, 'Curd Rice', 6905, 80, 110, 4.2, 16),
(725, 'Onion Dosa', 6904, 70, 100, 4.2, 11);

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
(4, 706, 'Masala Dosa', 6904, 70, 105, 4.8, 250);

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `order_id` varchar(17) NOT NULL,
  `mobile` bigint(10) NOT NULL,
  `res_id` int(11) NOT NULL,
  `items` int(11) NOT NULL,
  `total` int(11) NOT NULL,
  `dtotal` int(11) NOT NULL,
  `dname` text NOT NULL,
  `dmobile` bigint(10) NOT NULL,
  `location` longtext NOT NULL,
  `status` text NOT NULL,
  `Time` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`order_id`, `mobile`, `res_id`, `items`, `total`, `dtotal`, `dname`, `dmobile`, `location`, `status`, `Time`) VALUES
('ORD904059OF625262', 9014709040, 6903, 2, 210, 320, '', 0, 'https://www.google.com/maps/place/17.6868159+83.2184815', 'pending', '2025-04-22 10:23:45'),
('ORD90406HZD462207', 9014709040, 6903, 2, 450, 680, 'Ramu', 9090909090, 'https://www.google.com/maps/place/17.6868159+83.2184815', 'accept', '2025-04-22 10:37:42'),
('ORD90407MJD995755', 9014709040, 6903, 2, 450, 680, '', 0, 'https://www.google.com/maps/place/17.6868159+83.2184815', 'pending', '2025-04-22 10:29:55'),
('ORD90409A0U095067', 9014709040, 6903, 2, 450, 680, '', 0, 'https://www.google.com/maps/place/17.6868159+83.2184815', 'pending', '2025-04-22 10:31:35'),
('ORD9040MUV1327194', 9014709040, 6903, 2, 210, 320, '', 0, 'https://www.google.com/maps/place/17.6868159+83.2184815', 'pending', '2025-04-22 10:18:47'),
('ORD9040PAQL153835', 9014709040, 6903, 2, 450, 680, '', 0, 'https://www.google.com/maps/place/17.6868159+83.2184815', 'pending', '2025-04-22 10:32:33'),
('ORD9340F73N791720', 9515219340, 6901, 3, 345, 516, '', 0, 'https://www.google.com/maps/place/17.7294211+83.3014319', 'pending', '2025-04-21 19:26:31'),
('ORD9340KS2Z746330', 9515219340, 6901, 3, 345, 516, '', 0, 'https://www.google.com/maps/place/17.7294211+83.3014319', 'pending', '2025-04-21 19:25:46'),
('ORD9340V0LF811820', 9515219340, 6901, 3, 345, 516, 'PRUDVI', 9398927019, 'https://www.google.com/maps/place/17.7294211+83.3014319', 'accept', '2025-04-21 19:26:51');

-- --------------------------------------------------------

--
-- Table structure for table `orders_status`
--

CREATE TABLE `orders_status` (
  `sno` int(11) NOT NULL,
  `order_id` varchar(17) NOT NULL,
  `dmobile` bigint(10) NOT NULL,
  `res_name` mediumtext NOT NULL,
  `res_location` text NOT NULL,
  `username` text NOT NULL,
  `mobile` bigint(10) NOT NULL,
  `location` text NOT NULL,
  `total` int(11) NOT NULL,
  `status` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `orders_status`
--

INSERT INTO `orders_status` (`sno`, `order_id`, `dmobile`, `res_name`, `res_location`, `username`, `mobile`, `location`, `total`, `status`) VALUES
(93, 'ORD9340KS2Z746330', 9398927019, 'Saarangi Fine Dine restaurant', 'https://maps.app.goo.gl/8QuPibsDuQPJAk9S9', 'K PRASAD', 9515219340, 'https://www.google.com/maps/place/17.7294211+83.3014319', 345, 'reject'),
(94, 'ORD9340F73N791720', 8977241079, 'Saarangi Fine Dine restaurant', 'https://maps.app.goo.gl/8QuPibsDuQPJAk9S9', 'K PRASAD', 9515219340, 'https://www.google.com/maps/place/17.7294211+83.3014319', 345, 'reject'),
(95, 'ORD9340F73N791720', 9398927019, 'Saarangi Fine Dine restaurant', 'https://maps.app.goo.gl/8QuPibsDuQPJAk9S9', 'K PRASAD', 9515219340, 'https://www.google.com/maps/place/17.7294211+83.3014319', 345, 'reject'),
(96, 'ORD9340V0LF811820', 8977241079, 'Saarangi Fine Dine restaurant', 'https://maps.app.goo.gl/8QuPibsDuQPJAk9S9', 'K PRASAD', 9515219340, 'https://www.google.com/maps/place/17.7294211+83.3014319', 345, 'reject'),
(97, 'ORD9340V0LF811820', 9398927019, 'Saarangi Fine Dine restaurant', 'https://maps.app.goo.gl/8QuPibsDuQPJAk9S9', 'K PRASAD', 9515219340, 'https://www.google.com/maps/place/17.7294211+83.3014319', 345, 'accept'),
(98, 'ORD9340V0LF811820', 9398927019, 'Saarangi Fine Dine restaurant', 'https://maps.app.goo.gl/8QuPibsDuQPJAk9S9', 'K PRASAD', 9515219340, 'https://www.google.com/maps/place/17.7294211+83.3014319', 345, 'accept'),
(99, 'ORD904059OF625262', 9398927019, 'Sri Lakshmi Varaha Hotel', 'https://maps.app.goo.gl/YGJNNp2M6tKSbi2k8', 'Harsha Vardhan', 9014709040, 'https://www.google.com/maps/place/17.6868159+83.2184815', 210, 'reject'),
(100, 'ORD90407MJD995755', 9398927019, 'Sri Lakshmi Varaha Hotel', 'https://maps.app.goo.gl/YGJNNp2M6tKSbi2k8', 'Harsha Vardhan', 9014709040, 'https://www.google.com/maps/place/17.6868159+83.2184815', 450, 'reject'),
(101, 'ORD90407MJD995755', 9398927019, 'Sri Lakshmi Varaha Hotel', 'https://maps.app.goo.gl/YGJNNp2M6tKSbi2k8', 'Harsha Vardhan', 9014709040, 'https://www.google.com/maps/place/17.6868159+83.2184815', 450, 'accept'),
(102, 'ORD90409A0U095067', 9398927019, 'Sri Lakshmi Varaha Hotel', 'https://maps.app.goo.gl/YGJNNp2M6tKSbi2k8', 'Harsha Vardhan', 9014709040, 'https://www.google.com/maps/place/17.6868159+83.2184815', 450, 'accept'),
(103, 'ORD9040PAQL153835', 9398927019, 'Sri Lakshmi Varaha Hotel', 'https://maps.app.goo.gl/YGJNNp2M6tKSbi2k8', 'Harsha Vardhan', 9014709040, 'https://www.google.com/maps/place/17.6868159+83.2184815', 450, 'reject'),
(104, 'ORD9040PAQL153835', 9014709040, 'Sri Lakshmi Varaha Hotel', 'https://maps.app.goo.gl/YGJNNp2M6tKSbi2k8', 'Harsha Vardhan', 9014709040, 'https://www.google.com/maps/place/17.6868159+83.2184815', 450, 'reject'),
(105, 'ORD9040PAQL153835', 9398927019, 'Sri Lakshmi Varaha Hotel', 'https://maps.app.goo.gl/YGJNNp2M6tKSbi2k8', 'Harsha Vardhan', 9014709040, 'https://www.google.com/maps/place/17.6868159+83.2184815', 450, 'reject'),
(106, 'ORD9040PAQL153835', 9014709040, 'Sri Lakshmi Varaha Hotel', 'https://maps.app.goo.gl/YGJNNp2M6tKSbi2k8', 'Harsha Vardhan', 9014709040, 'https://www.google.com/maps/place/17.6868159+83.2184815', 450, 'reject'),
(107, 'ORD9040PAQL153835', 9398927019, 'Sri Lakshmi Varaha Hotel', 'https://maps.app.goo.gl/YGJNNp2M6tKSbi2k8', 'Harsha Vardhan', 9014709040, 'https://www.google.com/maps/place/17.6868159+83.2184815', 450, 'reject'),
(108, 'ORD9040PAQL153835', 9014709040, 'Sri Lakshmi Varaha Hotel', 'https://maps.app.goo.gl/YGJNNp2M6tKSbi2k8', 'Harsha Vardhan', 9014709040, 'https://www.google.com/maps/place/17.6868159+83.2184815', 450, 'reject'),
(109, 'ORD9040PAQL153835', 9014709040, 'Sri Lakshmi Varaha Hotel', 'https://maps.app.goo.gl/YGJNNp2M6tKSbi2k8', 'Harsha Vardhan', 9014709040, 'https://www.google.com/maps/place/17.6868159+83.2184815', 450, 'reject'),
(110, 'ORD9040PAQL153835', 9398927019, 'Sri Lakshmi Varaha Hotel', 'https://maps.app.goo.gl/YGJNNp2M6tKSbi2k8', 'Harsha Vardhan', 9014709040, 'https://www.google.com/maps/place/17.6868159+83.2184815', 450, 'accept'),
(111, 'ORD90406HZD462207', 9090909090, 'Sri Lakshmi Varaha Hotel', 'https://maps.app.goo.gl/YGJNNp2M6tKSbi2k8', 'Harsha Vardhan', 9014709040, 'https://www.google.com/maps/place/17.6868159+83.2184815', 450, 'reject'),
(112, 'ORD90406HZD462207', 9398927019, 'Sri Lakshmi Varaha Hotel', 'https://maps.app.goo.gl/YGJNNp2M6tKSbi2k8', 'Harsha Vardhan', 9014709040, 'https://www.google.com/maps/place/17.6868159+83.2184815', 450, 'reject'),
(113, 'ORD90406HZD462207', 9090909090, 'Sri Lakshmi Varaha Hotel', 'https://maps.app.goo.gl/YGJNNp2M6tKSbi2k8', 'Harsha Vardhan', 9014709040, 'https://www.google.com/maps/place/17.6868159+83.2184815', 450, 'reject'),
(114, 'ORD90406HZD462207', 9090909090, 'Sri Lakshmi Varaha Hotel', 'https://maps.app.goo.gl/YGJNNp2M6tKSbi2k8', 'Harsha Vardhan', 9014709040, 'https://www.google.com/maps/place/17.6868159+83.2184815', 450, 'reject'),
(115, 'ORD90406HZD462207', 9090909090, 'Sri Lakshmi Varaha Hotel', 'https://maps.app.goo.gl/YGJNNp2M6tKSbi2k8', 'Harsha Vardhan', 9014709040, 'https://www.google.com/maps/place/17.6868159+83.2184815', 450, 'reject'),
(116, 'ORD90406HZD462207', 8977241079, 'Sri Lakshmi Varaha Hotel', 'https://maps.app.goo.gl/YGJNNp2M6tKSbi2k8', 'Harsha Vardhan', 9014709040, 'https://www.google.com/maps/place/17.6868159+83.2184815', 450, 'reject'),
(117, 'ORD90406HZD462207', 8977241079, 'Sri Lakshmi Varaha Hotel', 'https://maps.app.goo.gl/YGJNNp2M6tKSbi2k8', 'Harsha Vardhan', 9014709040, 'https://www.google.com/maps/place/17.6868159+83.2184815', 450, 'reject'),
(118, 'ORD90406HZD462207', 9090909090, 'Sri Lakshmi Varaha Hotel', 'https://maps.app.goo.gl/YGJNNp2M6tKSbi2k8', 'Harsha Vardhan', 9014709040, 'https://www.google.com/maps/place/17.6868159+83.2184815', 450, 'accept');

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
(1701, 'ORD9340KS2Z746330', 701, 2, 40, 60, '2025-04-21 19:25:46'),
(1702, 'ORD9340KS2Z746330', 704, 3, 35, 52, '2025-04-21 19:25:46'),
(1703, 'ORD9340KS2Z746330', 709, 2, 80, 120, '2025-04-21 19:25:46'),
(1704, 'ORD9340F73N791720', 701, 2, 40, 60, '2025-04-21 19:26:31'),
(1705, 'ORD9340F73N791720', 704, 3, 35, 52, '2025-04-21 19:26:31'),
(1706, 'ORD9340F73N791720', 709, 2, 80, 120, '2025-04-21 19:26:31'),
(1707, 'ORD9340V0LF811820', 701, 2, 40, 60, '2025-04-21 19:26:51'),
(1708, 'ORD9340V0LF811820', 704, 3, 35, 52, '2025-04-21 19:26:51'),
(1709, 'ORD9340V0LF811820', 709, 2, 80, 120, '2025-04-21 19:26:51'),
(1710, 'ORD9040MUV1327194', 719, 1, 90, 140, '2025-04-22 10:18:47'),
(1711, 'ORD9040MUV1327194', 721, 1, 120, 180, '2025-04-22 10:18:47'),
(1712, 'ORD904059OF625262', 719, 1, 90, 140, '2025-04-22 10:23:45'),
(1713, 'ORD904059OF625262', 721, 1, 120, 180, '2025-04-22 10:23:45'),
(1714, 'ORD90407MJD995755', 719, 1, 90, 140, '2025-04-22 10:29:55'),
(1715, 'ORD90407MJD995755', 721, 3, 120, 180, '2025-04-22 10:29:55'),
(1716, 'ORD90409A0U095067', 719, 1, 90, 140, '2025-04-22 10:31:35'),
(1717, 'ORD90409A0U095067', 721, 3, 120, 180, '2025-04-22 10:31:35'),
(1718, 'ORD9040PAQL153835', 719, 1, 90, 140, '2025-04-22 10:32:33'),
(1719, 'ORD9040PAQL153835', 721, 3, 120, 180, '2025-04-22 10:32:33'),
(1720, 'ORD90406HZD462207', 719, 1, 90, 140, '2025-04-22 10:37:42'),
(1721, 'ORD90406HZD462207', 721, 3, 120, 180, '2025-04-22 10:37:42');

-- --------------------------------------------------------

--
-- Table structure for table `restaurants`
--

CREATE TABLE `restaurants` (
  `res_id` int(11) NOT NULL,
  `res_name` mediumtext NOT NULL,
  `ratings` float NOT NULL,
  `res_location` text NOT NULL,
  `best_item` int(11) NOT NULL,
  `offer` mediumtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `restaurants`
--

INSERT INTO `restaurants` (`res_id`, `res_name`, `ratings`, `res_location`, `best_item`, `offer`) VALUES
(6901, 'Saarangi Fine Dine restaurant', 3.9, 'https://maps.app.goo.gl/8QuPibsDuQPJAk9S9', 701, 'Starts at ₹40'),
(6902, 'Southern Spice', 4.3, 'https://maps.app.goo.gl/YGJNNp2M6tKSbi2k8', 702, 'Starts at ₹70'),
(6903, 'Sri Lakshmi Varaha Hotel', 4.1, 'https://maps.app.goo.gl/YGJNNp2M6tKSbi2k8', 705, 'Starts at ₹80'),
(6904, 'Gufha Restaurant', 4.6, 'https://maps.app.goo.gl/YGJNNp2M6tKSbi2k8', 706, 'Starts at ₹90'),
(6905, 'Mahesh Family Restaurant', 4.5, 'https://maps.app.goo.gl/YGJNNp2M6tKSbi2k8', 703, 'Starts at ₹90');

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
(8341734115, 'mohan', '', 'efevbfv', 'efevffv', 'evfevfefv', '2025-04-07 11:32:28'),
(9014709040, 'Harsha Vardhan', 'harsha@gmail.com', 'Room no 6969', 'Vishnu Nivasam', 'Near Railway station', '2025-03-02 10:27:18'),
(9398927019, 'Prudvi', 'Prudvi@ceo.com', '5-302, bharat bekary line', 'sri nagar colony, bethamcherla', 'manohar store', '2025-03-23 11:46:34'),
(9515219340, 'K PRASAD', '', 'K.T Road', 'Tirupati', 'TTD AD Building', '2025-04-21 14:29:55'),
(9550744529, 'Pulivendula vijay', '', '2/168', 'kt road ', 'saimedagate', '2025-03-31 19:04:12'),
(9848247279, 'jagan', 'jaganachari2006@gmail.com', 'hghj', 'hjvjy', 'yfyvjh', '2025-03-28 22:08:36');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `delivery_activities`
--
ALTER TABLE `delivery_activities`
  ADD PRIMARY KEY (`sno`),
  ADD KEY `dmobile` (`dmobile`);

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
  ADD KEY `fk_orddid` (`order_id`);

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
-- AUTO_INCREMENT for table `delivery_activities`
--
ALTER TABLE `delivery_activities`
  MODIFY `sno` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `most_ordered_items`
--
ALTER TABLE `most_ordered_items`
  MODIFY `mid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `orders_status`
--
ALTER TABLE `orders_status`
  MODIFY `sno` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=119;

--
-- AUTO_INCREMENT for table `order_items`
--
ALTER TABLE `order_items`
  MODIFY `sno` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1722;

--
-- AUTO_INCREMENT for table `search_items`
--
ALTER TABLE `search_items`
  MODIFY `Sno` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `delivery_activities`
--
ALTER TABLE `delivery_activities`
  ADD CONSTRAINT `delivery_activities_ibfk_1` FOREIGN KEY (`dmobile`) REFERENCES `delivery_agent` (`dmobile`) ON DELETE CASCADE ON UPDATE CASCADE;

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
  ADD CONSTRAINT `fk_id` FOREIGN KEY (`order_id`) REFERENCES `orders` (`order_id`),
  ADD CONSTRAINT `fk_orddid` FOREIGN KEY (`order_id`) REFERENCES `orders` (`order_id`);

--
-- Constraints for table `order_items`
--
ALTER TABLE `order_items`
  ADD CONSTRAINT `fk_order` FOREIGN KEY (`order_id`) REFERENCES `orders` (`order_id`) ON DELETE CASCADE ON UPDATE CASCADE;
--
-- Database: `phpmyadmin`
--
CREATE DATABASE IF NOT EXISTS `phpmyadmin` DEFAULT CHARACTER SET utf8 COLLATE utf8_bin;
USE `phpmyadmin`;

-- --------------------------------------------------------

--
-- Table structure for table `pma__bookmark`
--

CREATE TABLE `pma__bookmark` (
  `id` int(10) UNSIGNED NOT NULL,
  `dbase` varchar(255) NOT NULL DEFAULT '',
  `user` varchar(255) NOT NULL DEFAULT '',
  `label` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '',
  `query` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Bookmarks';

-- --------------------------------------------------------

--
-- Table structure for table `pma__central_columns`
--

CREATE TABLE `pma__central_columns` (
  `db_name` varchar(64) NOT NULL,
  `col_name` varchar(64) NOT NULL,
  `col_type` varchar(64) NOT NULL,
  `col_length` text DEFAULT NULL,
  `col_collation` varchar(64) NOT NULL,
  `col_isNull` tinyint(1) NOT NULL,
  `col_extra` varchar(255) DEFAULT '',
  `col_default` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Central list of columns';

-- --------------------------------------------------------

--
-- Table structure for table `pma__column_info`
--

CREATE TABLE `pma__column_info` (
  `id` int(5) UNSIGNED NOT NULL,
  `db_name` varchar(64) NOT NULL DEFAULT '',
  `table_name` varchar(64) NOT NULL DEFAULT '',
  `column_name` varchar(64) NOT NULL DEFAULT '',
  `comment` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '',
  `mimetype` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '',
  `transformation` varchar(255) NOT NULL DEFAULT '',
  `transformation_options` varchar(255) NOT NULL DEFAULT '',
  `input_transformation` varchar(255) NOT NULL DEFAULT '',
  `input_transformation_options` varchar(255) NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Column information for phpMyAdmin';

-- --------------------------------------------------------

--
-- Table structure for table `pma__designer_settings`
--

CREATE TABLE `pma__designer_settings` (
  `username` varchar(64) NOT NULL,
  `settings_data` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Settings related to Designer';

--
-- Dumping data for table `pma__designer_settings`
--

INSERT INTO `pma__designer_settings` (`username`, `settings_data`) VALUES
('root', '{\"angular_direct\":\"direct\",\"snap_to_grid\":\"off\",\"relation_lines\":\"true\"}');

-- --------------------------------------------------------

--
-- Table structure for table `pma__export_templates`
--

CREATE TABLE `pma__export_templates` (
  `id` int(5) UNSIGNED NOT NULL,
  `username` varchar(64) NOT NULL,
  `export_type` varchar(10) NOT NULL,
  `template_name` varchar(64) NOT NULL,
  `template_data` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Saved export templates';

-- --------------------------------------------------------

--
-- Table structure for table `pma__favorite`
--

CREATE TABLE `pma__favorite` (
  `username` varchar(64) NOT NULL,
  `tables` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Favorite tables';

-- --------------------------------------------------------

--
-- Table structure for table `pma__history`
--

CREATE TABLE `pma__history` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `username` varchar(64) NOT NULL DEFAULT '',
  `db` varchar(64) NOT NULL DEFAULT '',
  `table` varchar(64) NOT NULL DEFAULT '',
  `timevalue` timestamp NOT NULL DEFAULT current_timestamp(),
  `sqlquery` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='SQL history for phpMyAdmin';

-- --------------------------------------------------------

--
-- Table structure for table `pma__navigationhiding`
--

CREATE TABLE `pma__navigationhiding` (
  `username` varchar(64) NOT NULL,
  `item_name` varchar(64) NOT NULL,
  `item_type` varchar(64) NOT NULL,
  `db_name` varchar(64) NOT NULL,
  `table_name` varchar(64) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Hidden items of navigation tree';

-- --------------------------------------------------------

--
-- Table structure for table `pma__pdf_pages`
--

CREATE TABLE `pma__pdf_pages` (
  `db_name` varchar(64) NOT NULL DEFAULT '',
  `page_nr` int(10) UNSIGNED NOT NULL,
  `page_descr` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='PDF relation pages for phpMyAdmin';

-- --------------------------------------------------------

--
-- Table structure for table `pma__recent`
--

CREATE TABLE `pma__recent` (
  `username` varchar(64) NOT NULL,
  `tables` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Recently accessed tables';

--
-- Dumping data for table `pma__recent`
--

INSERT INTO `pma__recent` (`username`, `tables`) VALUES
('root', '[{\"db\":\"food_delivery\",\"table\":\"users\"},{\"db\":\"food_delivery\",\"table\":\"delivery_agent\"},{\"db\":\"food_delivery\",\"table\":\"orders\"},{\"db\":\"food_delivery\",\"table\":\"orders_status\"},{\"db\":\"food_delivery\",\"table\":\"order_items\"},{\"db\":\"food_delivery\",\"table\":\"items\"}]');

-- --------------------------------------------------------

--
-- Table structure for table `pma__relation`
--

CREATE TABLE `pma__relation` (
  `master_db` varchar(64) NOT NULL DEFAULT '',
  `master_table` varchar(64) NOT NULL DEFAULT '',
  `master_field` varchar(64) NOT NULL DEFAULT '',
  `foreign_db` varchar(64) NOT NULL DEFAULT '',
  `foreign_table` varchar(64) NOT NULL DEFAULT '',
  `foreign_field` varchar(64) NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Relation table';

-- --------------------------------------------------------

--
-- Table structure for table `pma__savedsearches`
--

CREATE TABLE `pma__savedsearches` (
  `id` int(5) UNSIGNED NOT NULL,
  `username` varchar(64) NOT NULL DEFAULT '',
  `db_name` varchar(64) NOT NULL DEFAULT '',
  `search_name` varchar(64) NOT NULL DEFAULT '',
  `search_data` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Saved searches';

-- --------------------------------------------------------

--
-- Table structure for table `pma__table_coords`
--

CREATE TABLE `pma__table_coords` (
  `db_name` varchar(64) NOT NULL DEFAULT '',
  `table_name` varchar(64) NOT NULL DEFAULT '',
  `pdf_page_number` int(11) NOT NULL DEFAULT 0,
  `x` float UNSIGNED NOT NULL DEFAULT 0,
  `y` float UNSIGNED NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Table coordinates for phpMyAdmin PDF output';

-- --------------------------------------------------------

--
-- Table structure for table `pma__table_info`
--

CREATE TABLE `pma__table_info` (
  `db_name` varchar(64) NOT NULL DEFAULT '',
  `table_name` varchar(64) NOT NULL DEFAULT '',
  `display_field` varchar(64) NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Table information for phpMyAdmin';

-- --------------------------------------------------------

--
-- Table structure for table `pma__table_uiprefs`
--

CREATE TABLE `pma__table_uiprefs` (
  `username` varchar(64) NOT NULL,
  `db_name` varchar(64) NOT NULL,
  `table_name` varchar(64) NOT NULL,
  `prefs` text NOT NULL,
  `last_update` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Tables'' UI preferences';

-- --------------------------------------------------------

--
-- Table structure for table `pma__tracking`
--

CREATE TABLE `pma__tracking` (
  `db_name` varchar(64) NOT NULL,
  `table_name` varchar(64) NOT NULL,
  `version` int(10) UNSIGNED NOT NULL,
  `date_created` datetime NOT NULL,
  `date_updated` datetime NOT NULL,
  `schema_snapshot` text NOT NULL,
  `schema_sql` text DEFAULT NULL,
  `data_sql` longtext DEFAULT NULL,
  `tracking` set('UPDATE','REPLACE','INSERT','DELETE','TRUNCATE','CREATE DATABASE','ALTER DATABASE','DROP DATABASE','CREATE TABLE','ALTER TABLE','RENAME TABLE','DROP TABLE','CREATE INDEX','DROP INDEX','CREATE VIEW','ALTER VIEW','DROP VIEW') DEFAULT NULL,
  `tracking_active` int(1) UNSIGNED NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Database changes tracking for phpMyAdmin';

-- --------------------------------------------------------

--
-- Table structure for table `pma__userconfig`
--

CREATE TABLE `pma__userconfig` (
  `username` varchar(64) NOT NULL,
  `timevalue` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `config_data` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='User preferences storage for phpMyAdmin';

--
-- Dumping data for table `pma__userconfig`
--

INSERT INTO `pma__userconfig` (`username`, `timevalue`, `config_data`) VALUES
('root', '2025-04-21 02:42:12', '{\"Console\\/Mode\":\"collapse\"}');

-- --------------------------------------------------------

--
-- Table structure for table `pma__usergroups`
--

CREATE TABLE `pma__usergroups` (
  `usergroup` varchar(64) NOT NULL,
  `tab` varchar(64) NOT NULL,
  `allowed` enum('Y','N') NOT NULL DEFAULT 'N'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='User groups with configured menu items';

-- --------------------------------------------------------

--
-- Table structure for table `pma__users`
--

CREATE TABLE `pma__users` (
  `username` varchar(64) NOT NULL,
  `usergroup` varchar(64) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Users and their assignments to user groups';

--
-- Indexes for dumped tables
--

--
-- Indexes for table `pma__bookmark`
--
ALTER TABLE `pma__bookmark`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `pma__central_columns`
--
ALTER TABLE `pma__central_columns`
  ADD PRIMARY KEY (`db_name`,`col_name`);

--
-- Indexes for table `pma__column_info`
--
ALTER TABLE `pma__column_info`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `db_name` (`db_name`,`table_name`,`column_name`);

--
-- Indexes for table `pma__designer_settings`
--
ALTER TABLE `pma__designer_settings`
  ADD PRIMARY KEY (`username`);

--
-- Indexes for table `pma__export_templates`
--
ALTER TABLE `pma__export_templates`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `u_user_type_template` (`username`,`export_type`,`template_name`);

--
-- Indexes for table `pma__favorite`
--
ALTER TABLE `pma__favorite`
  ADD PRIMARY KEY (`username`);

--
-- Indexes for table `pma__history`
--
ALTER TABLE `pma__history`
  ADD PRIMARY KEY (`id`),
  ADD KEY `username` (`username`,`db`,`table`,`timevalue`);

--
-- Indexes for table `pma__navigationhiding`
--
ALTER TABLE `pma__navigationhiding`
  ADD PRIMARY KEY (`username`,`item_name`,`item_type`,`db_name`,`table_name`);

--
-- Indexes for table `pma__pdf_pages`
--
ALTER TABLE `pma__pdf_pages`
  ADD PRIMARY KEY (`page_nr`),
  ADD KEY `db_name` (`db_name`);

--
-- Indexes for table `pma__recent`
--
ALTER TABLE `pma__recent`
  ADD PRIMARY KEY (`username`);

--
-- Indexes for table `pma__relation`
--
ALTER TABLE `pma__relation`
  ADD PRIMARY KEY (`master_db`,`master_table`,`master_field`),
  ADD KEY `foreign_field` (`foreign_db`,`foreign_table`);

--
-- Indexes for table `pma__savedsearches`
--
ALTER TABLE `pma__savedsearches`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `u_savedsearches_username_dbname` (`username`,`db_name`,`search_name`);

--
-- Indexes for table `pma__table_coords`
--
ALTER TABLE `pma__table_coords`
  ADD PRIMARY KEY (`db_name`,`table_name`,`pdf_page_number`);

--
-- Indexes for table `pma__table_info`
--
ALTER TABLE `pma__table_info`
  ADD PRIMARY KEY (`db_name`,`table_name`);

--
-- Indexes for table `pma__table_uiprefs`
--
ALTER TABLE `pma__table_uiprefs`
  ADD PRIMARY KEY (`username`,`db_name`,`table_name`);

--
-- Indexes for table `pma__tracking`
--
ALTER TABLE `pma__tracking`
  ADD PRIMARY KEY (`db_name`,`table_name`,`version`);

--
-- Indexes for table `pma__userconfig`
--
ALTER TABLE `pma__userconfig`
  ADD PRIMARY KEY (`username`);

--
-- Indexes for table `pma__usergroups`
--
ALTER TABLE `pma__usergroups`
  ADD PRIMARY KEY (`usergroup`,`tab`,`allowed`);

--
-- Indexes for table `pma__users`
--
ALTER TABLE `pma__users`
  ADD PRIMARY KEY (`username`,`usergroup`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `pma__bookmark`
--
ALTER TABLE `pma__bookmark`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `pma__column_info`
--
ALTER TABLE `pma__column_info`
  MODIFY `id` int(5) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `pma__export_templates`
--
ALTER TABLE `pma__export_templates`
  MODIFY `id` int(5) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `pma__history`
--
ALTER TABLE `pma__history`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `pma__pdf_pages`
--
ALTER TABLE `pma__pdf_pages`
  MODIFY `page_nr` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `pma__savedsearches`
--
ALTER TABLE `pma__savedsearches`
  MODIFY `id` int(5) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- Database: `prac`
--
CREATE DATABASE IF NOT EXISTS `prac` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `prac`;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` text NOT NULL,
  `message` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `message`) VALUES
(1, 'Harsha', 'Hi '),
(2, 'Abhi', 'Hello'),
(3, 'Neeethu', 'What doing');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- Database: `test`
--
CREATE DATABASE IF NOT EXISTS `test` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `test`;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
