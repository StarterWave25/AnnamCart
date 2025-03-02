-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 02, 2025 at 05:59 AM
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
(702, 'Dosa', 6902, 50, 75, 4.7, 200),
(703, 'Vada(3) & Sambar', 6902, 30, 45, 4.3, 150),
(704, 'Upma', 6901, 35, 52, 4.2, 80),
(705, 'Pongal', 6903, 45, 67, 4.4, 90),
(706, 'Masala Dosa', 6904, 70, 105, 4.8, 250),
(707, 'Rava Dosa', 6903, 65, 97, 4.6, 180),
(708, 'Karam Dosa', 6904, 60, 90, 4.5, 140),
(709, 'Gobi Rice', 6901, 80, 120, 4.7, 220),
(710, 'Lemon Rice', 6902, 50, 75, 4.3, 130),
(711, 'Rava Idli', 6902, 50, 80, 4.4, 20),
(712, 'Chapathi(2)', 6903, 40, 70, 4.2, 15);

-- --------------------------------------------------------

--
-- Table structure for table `most_ordered_items`
--

CREATE TABLE `most_ordered_items` (
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

INSERT INTO `most_ordered_items` (`item_id`, `item_name`, `res_id`, `price`, `dprice`, `ratings`, `rperson`) VALUES
(701, 'Idli', 6901, 40, 60, 4.5, 120),
(703, 'Vada', 6902, 30, 45, 4.3, 150),
(705, 'Pongal', 6903, 45, 67, 4.4, 90),
(706, 'Masala Dosa', 6904, 70, 105, 4.8, 250);

-- --------------------------------------------------------

--
-- Table structure for table `restaurants`
--

CREATE TABLE `restaurants` (
  `res_id` int(11) NOT NULL,
  `res_name` mediumtext NOT NULL,
  `ratings` float NOT NULL,
  `best_item` int(11) NOT NULL,
  `offer` mediumtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `restaurants`
--

INSERT INTO `restaurants` (`res_id`, `res_name`, `ratings`, `best_item`, `offer`) VALUES
(6901, 'Saarangi Fine Dine restaurant', 3.9, 701, 'Starts at ₹40'),
(6902, 'Southern Spice', 4.3, 703, 'Starts at ₹70'),
(6903, 'Sri Lakshmi Varaha Hotel', 4.1, 705, 'Starts at ₹80'),
(6904, 'Gufha Restaurant', 4.6, 706, 'Starts at ₹90');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `mobile` bigint(10) NOT NULL,
  `name` text NOT NULL,
  `email` text NOT NULL,
  `address` longtext NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`mobile`, `name`, `email`, `address`, `created_at`) VALUES
(9014709040, 'Harsha Vardhan', 'harsha@gmail.com', 'Teachers Colony, Rayadurgam', '2025-03-02 10:27:18');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `items`
--
ALTER TABLE `items`
  ADD PRIMARY KEY (`item_id`);

--
-- Indexes for table `most_ordered_items`
--
ALTER TABLE `most_ordered_items`
  ADD PRIMARY KEY (`item_id`);

--
-- Indexes for table `restaurants`
--
ALTER TABLE `restaurants`
  ADD PRIMARY KEY (`res_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`mobile`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
