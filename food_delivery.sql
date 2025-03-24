-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 24, 2025 at 08:35 AM
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
-- Table structure for table `cart`
--

CREATE TABLE `cart` (
  `cart_id` int(11) NOT NULL,
  `mobile` bigint(10) NOT NULL,
  `item_id` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `created at` date NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `cart`
--

INSERT INTO `cart` (`cart_id`, `mobile`, `item_id`, `quantity`, `created at`) VALUES
(1, 9014709040, 702, 3, '2025-03-09'),
(2, 9014709040, 703, 2, '2025-03-09'),
(3, 9014709040, 711, 2, '2025-03-09'),
(5, 9398927019, 707, 1, '2025-03-23'),
(6, 9398927019, 718, 3, '2025-03-24'),
(16, 9398927019, 723, 1, '2025-03-24');

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
(711, 'Rava Idli', 6902, 50, 80, 4.4, 20),
(712, 'Chapathi(2)', 6903, 40, 70, 4.2, 15),
(713, 'Poori(3)', 6902, 50, 90, 3.8, 4),
(714, 'Onion Uttapam', 6904, 80, 120, 4.1, 9),
(715, 'Veg rice', 6901, 100, 140, 4.2, 12),
(716, 'Zeera rice', 6901, 120, 150, 4.3, 15),
(717, 'Paneer Rice', 6901, 160, 200, 4.5, 14),
(718, 'Kaju Rice', 6901, 165, 220, 4.5, 9),
(719, 'Veg Noodles', 6903, 90, 140, 4.3, 10),
(720, 'Gobi Noodles', 6903, 100, 150, 4.8, 15),
(721, 'Paneer Noodles', 6903, 120, 180, 4.2, 8),
(722, 'Gobi manchuria', 6902, 110, 160, 4.4, 13),
(723, 'Paneer Butter Masala', 6902, 160, 220, 4.5, 14),
(724, 'Curd Rice', 6902, 80, 110, 4.2, 16),
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
(6904, 'Gufha Restaurant', 4.6, 706, 'Starts at ₹90'),
(6905, 'Mahesh Family Dhaba', 4.5, 703, 'Starts at ₹90');

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
  `address` longtext NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`mobile`, `name`, `email`, `address`, `created_at`) VALUES
(7981629173, 'Jasu', '', '', '2025-03-09 21:18:21'),
(9014709040, 'Harsha Vardhan', 'harsha@gmail.com', 'Rambagicha Bus stand', '2025-03-02 10:27:18'),
(9398927019, 'Prudvi', 'Prudvi@ceo.com', '2-street, oumers, new york', '2025-03-23 11:46:34');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cart`
--
ALTER TABLE `cart`
  ADD PRIMARY KEY (`cart_id`),
  ADD UNIQUE KEY `mobile` (`mobile`,`item_id`);

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
-- AUTO_INCREMENT for table `cart`
--
ALTER TABLE `cart`
  MODIFY `cart_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `most_ordered_items`
--
ALTER TABLE `most_ordered_items`
  MODIFY `mid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

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
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
