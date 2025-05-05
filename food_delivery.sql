-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 05, 2025 at 06:47 AM
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
(87, '9398927019', '2025-05-05 05:03:39', '2025-05-05 05:09:11', 332, '2025-05-05');

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
  `Time` datetime NOT NULL DEFAULT current_timestamp(),
  `delivered_time` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`order_id`, `mobile`, `username`, `ptype`, `res_id`, `items`, `total`, `dtotal`, `dname`, `dmobile`, `location`, `status`, `Time`, `delivered_time`) VALUES
('ORD7777CIJU835129', 7777777777, 'jesari', 'cash', 6903, 1, 65, 97, 'PRUDVI', 9398927019, 'https://www.google.com/maps/place/17.6920691+83.2425711', 'delivered', '2025-05-03 16:10:35', '2025-05-03 16:10:57'),
('ORD7777JKYG089714', 7777777777, 'jesari', 'cash', 6903, 1, 65, 97, 'PRUDVI', 9398927019, 'https://www.google.com/maps/place/17.6920691+83.2425711', 'delivered', '2025-05-03 16:14:49', '2025-05-03 16:14:49'),
('ORD93405KOV284352', 9515219340, 'K PRASAD', 'upi', 6904, 3, 210, 315, 'Harsha', 9014709040, 'https://www.google.com/maps/place/14.6941362+77.5991921', 'delivered', '2025-05-05 08:34:44', '2025-05-05 08:35:30'),
('ORD9340BH5E359772', 9515219340, 'K PRASAD', 'cash', 6904, 2, 140, 210, 'PRUDVI', 9398927019, 'https://www.google.com/maps/place/14.6941362+77.5991921', 'delivered', '2025-05-05 08:35:59', '2025-05-05 08:39:00');

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
  `status` text NOT NULL,
  `time` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `orders_status`
--

INSERT INTO `orders_status` (`sno`, `order_id`, `dmobile`, `res_name`, `res_location`, `username`, `mobile`, `location`, `total`, `status`, `time`) VALUES
(310, 'ORD7777CIJU835129', 9398927019, 'Sri Lakshmi Varaha Hotel', 'https://maps.app.goo.gl/YGJNNp2M6tKSbi2k8', 'jesari', 7777777777, 'https://www.google.com/maps/place/17.6920691+83.2425711', 65, 'delivered', '2025-05-03 16:10:35'),
(311, 'ORD7777JKYG089714', 9398927019, 'Sri Lakshmi Varaha Hotel', 'https://maps.app.goo.gl/YGJNNp2M6tKSbi2k8', 'jesari', 7777777777, 'https://www.google.com/maps/place/17.6920691+83.2425711', 65, 'delivered', '2025-05-03 16:14:49'),
(312, 'ORD93405KOV284352', 9398927019, 'Gufha Restaurant', 'https://maps.app.goo.gl/YGJNNp2M6tKSbi2k8', 'K PRASAD', 9515219340, 'https://www.google.com/maps/place/14.6941362+77.5991921', 210, 'reject', '2025-05-05 08:34:44'),
(313, 'ORD93405KOV284352', 9398927019, 'Gufha Restaurant', 'https://maps.app.goo.gl/YGJNNp2M6tKSbi2k8', 'K PRASAD', 9515219340, 'https://www.google.com/maps/place/14.6941362+77.5991921', 210, 'reject', '2025-05-05 08:34:49'),
(314, 'ORD93405KOV284352', 9398927019, 'Gufha Restaurant', 'https://maps.app.goo.gl/YGJNNp2M6tKSbi2k8', 'K PRASAD', 9515219340, 'https://www.google.com/maps/place/14.6941362+77.5991921', 210, 'reject', '2025-05-05 08:34:53'),
(315, 'ORD93405KOV284352', 9014709040, 'Gufha Restaurant', 'https://maps.app.goo.gl/YGJNNp2M6tKSbi2k8', 'K PRASAD', 9515219340, 'https://www.google.com/maps/place/14.6941362+77.5991921', 210, 'delivered', '2025-05-05 08:34:57'),
(316, 'ORD9340BH5E359772', 9014709040, 'Gufha Restaurant', 'https://maps.app.goo.gl/YGJNNp2M6tKSbi2k8', 'K PRASAD', 9515219340, 'https://www.google.com/maps/place/14.6941362+77.5991921', 140, 'reject', '2025-05-05 08:35:59'),
(317, 'ORD9340BH5E359772', 9014709040, 'Gufha Restaurant', 'https://maps.app.goo.gl/YGJNNp2M6tKSbi2k8', 'K PRASAD', 9515219340, 'https://www.google.com/maps/place/14.6941362+77.5991921', 140, 'reject', '2025-05-05 08:36:06'),
(318, 'ORD9340BH5E359772', 9398927019, 'Gufha Restaurant', 'https://maps.app.goo.gl/YGJNNp2M6tKSbi2k8', 'K PRASAD', 9515219340, 'https://www.google.com/maps/place/14.6941362+77.5991921', 140, 'delivered', '2025-05-05 08:36:11');

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
(2195, 'ORD7777CIJU835129', 707, 1, 65, 97, '2025-05-03 16:10:35'),
(2196, 'ORD7777JKYG089714', 707, 1, 65, 97, '2025-05-03 16:14:49'),
(2197, 'ORD93405KOV284352', 706, 1, 70, 105, '2025-05-05 08:34:44'),
(2198, 'ORD93405KOV284352', 708, 1, 60, 90, '2025-05-05 08:34:44'),
(2199, 'ORD93405KOV284352', 714, 1, 80, 120, '2025-05-05 08:34:44'),
(2200, 'ORD9340BH5E359772', 708, 1, 60, 90, '2025-05-05 08:35:59'),
(2201, 'ORD9340BH5E359772', 714, 1, 80, 120, '2025-05-05 08:35:59');

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
  `offer` mediumtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `restaurants`
--

INSERT INTO `restaurants` (`res_id`, `password`, `res_name`, `ratings`, `res_location`, `best_item`, `offer`) VALUES
(6901, 'saar6901', 'Saarangi Fine Dine restaurant', 3.9, 'https://maps.app.goo.gl/8QuPibsDuQPJAk9S9', 701, 'Starts at ₹40'),
(6902, 'sout6902', 'Southern Spice', 4.3, 'https://maps.app.goo.gl/YGJNNp2M6tKSbi2k8', 702, 'Starts at ₹70'),
(6903, 'sril6903', 'Sri Lakshmi Varaha Hotel', 4.1, 'https://maps.app.goo.gl/YGJNNp2M6tKSbi2k8', 705, 'Starts at ₹80'),
(6904, 'gufh6904', 'Gufha Restaurant', 4.6, 'https://maps.app.goo.gl/YGJNNp2M6tKSbi2k8', 706, 'Starts at ₹90'),
(6905, 'mahe6905', 'Mahesh Family Restaurant', 4.5, 'https://maps.app.goo.gl/YGJNNp2M6tKSbi2k8', 703, 'Starts at ₹90');

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
-- AUTO_INCREMENT for table `delivery_activities`
--
ALTER TABLE `delivery_activities`
  MODIFY `sno` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `delivery_activity`
--
ALTER TABLE `delivery_activity`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=88;

--
-- AUTO_INCREMENT for table `most_ordered_items`
--
ALTER TABLE `most_ordered_items`
  MODIFY `mid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `orders_status`
--
ALTER TABLE `orders_status`
  MODIFY `sno` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=319;

--
-- AUTO_INCREMENT for table `order_items`
--
ALTER TABLE `order_items`
  MODIFY `sno` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2202;

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
