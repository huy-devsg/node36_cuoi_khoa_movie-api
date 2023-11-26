/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

DROP TABLE IF EXISTS `Banner`;
CREATE TABLE `Banner` (
  `ma_banner` int NOT NULL AUTO_INCREMENT,
  `ma_phim` int DEFAULT NULL,
  `hinh_anh` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`ma_banner`),
  KEY `ma_phim` (`ma_phim`),
  CONSTRAINT `Banner_ibfk_1` FOREIGN KEY (`ma_phim`) REFERENCES `Phim` (`ma_phim`)
) ENGINE=InnoDB AUTO_INCREMENT=54 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

DROP TABLE IF EXISTS `CumRap`;
CREATE TABLE `CumRap` (
  `ma_cum_rap` int NOT NULL AUTO_INCREMENT,
  `ten_cum_rap` varchar(255) DEFAULT NULL,
  `dia_chi` varchar(255) DEFAULT NULL,
  `ma_he_thong_rap` int DEFAULT NULL,
  PRIMARY KEY (`ma_cum_rap`),
  KEY `ma_he_thong_rap` (`ma_he_thong_rap`),
  CONSTRAINT `CumRap_ibfk_1` FOREIGN KEY (`ma_he_thong_rap`) REFERENCES `HeThongRap` (`ma_he_thong_rap`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

DROP TABLE IF EXISTS `DatVe`;
CREATE TABLE `DatVe` (
  `ve_id` int NOT NULL AUTO_INCREMENT,
  `tai_khoan` int NOT NULL,
  `ma_lich_chieu` int NOT NULL,
  `ma_ghe` int DEFAULT NULL,
  PRIMARY KEY (`ve_id`),
  KEY `ma_lich_chieu` (`ma_lich_chieu`),
  KEY `ma_ghe` (`ma_ghe`),
  KEY `tai_khoan` (`tai_khoan`),
  CONSTRAINT `DatVe_ibfk_2` FOREIGN KEY (`ma_lich_chieu`) REFERENCES `LichChieu` (`ma_lich_chieu`),
  CONSTRAINT `DatVe_ibfk_3` FOREIGN KEY (`tai_khoan`) REFERENCES `NguoiDung` (`tai_khoan`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=65 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

DROP TABLE IF EXISTS `Ghe`;
CREATE TABLE `Ghe` (
  `ma_ghe` int NOT NULL AUTO_INCREMENT,
  `ten_ghe` varchar(255) DEFAULT NULL,
  `loai_ghe` varchar(255) DEFAULT NULL,
  `ma_rap` int DEFAULT NULL,
  PRIMARY KEY (`ma_ghe`),
  KEY `ma_rap` (`ma_rap`),
  CONSTRAINT `Ghe_ibfk_1` FOREIGN KEY (`ma_rap`) REFERENCES `RapPhim` (`ma_rap`)
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

DROP TABLE IF EXISTS `HeThongRap`;
CREATE TABLE `HeThongRap` (
  `ma_he_thong_rap` int NOT NULL AUTO_INCREMENT,
  `ten_he_thong_rap` varchar(255) DEFAULT NULL,
  `logo` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`ma_he_thong_rap`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

DROP TABLE IF EXISTS `LichChieu`;
CREATE TABLE `LichChieu` (
  `ma_lich_chieu` int NOT NULL AUTO_INCREMENT,
  `ma_rap` int DEFAULT NULL,
  `ma_phim` int DEFAULT NULL,
  `ngay_gio_chieu` datetime DEFAULT NULL,
  `gia_ve` int DEFAULT NULL,
  PRIMARY KEY (`ma_lich_chieu`),
  KEY `ma_rap` (`ma_rap`),
  KEY `ma_phim` (`ma_phim`),
  CONSTRAINT `LichChieu_ibfk_1` FOREIGN KEY (`ma_rap`) REFERENCES `RapPhim` (`ma_rap`),
  CONSTRAINT `LichChieu_ibfk_2` FOREIGN KEY (`ma_phim`) REFERENCES `Phim` (`ma_phim`)
) ENGINE=InnoDB AUTO_INCREMENT=45 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

DROP TABLE IF EXISTS `NguoiDung`;
CREATE TABLE `NguoiDung` (
  `tai_khoan` int NOT NULL AUTO_INCREMENT,
  `ho_ten` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `so_dt` varchar(255) DEFAULT NULL,
  `mat_khau` varchar(255) DEFAULT NULL,
  `loai_nguoi_dung` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`tai_khoan`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

DROP TABLE IF EXISTS `Phim`;
CREATE TABLE `Phim` (
  `ma_phim` int NOT NULL AUTO_INCREMENT,
  `ten_phim` varchar(255) DEFAULT NULL,
  `trailer` varchar(255) DEFAULT NULL,
  `hinh_anh` varchar(255) DEFAULT NULL,
  `mo_ta` varchar(255) DEFAULT NULL,
  `ngay_khoi_chieu` date DEFAULT NULL,
  `danh_gia` int DEFAULT NULL,
  `hot` tinyint(1) DEFAULT NULL,
  `dang_chieu` tinyint(1) DEFAULT NULL,
  `sap_chieu` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`ma_phim`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

DROP TABLE IF EXISTS `RapPhim`;
CREATE TABLE `RapPhim` (
  `ma_rap` int NOT NULL AUTO_INCREMENT,
  `ten_rap` varchar(255) DEFAULT NULL,
  `ma_cum_rap` int DEFAULT NULL,
  PRIMARY KEY (`ma_rap`),
  KEY `ma_cum_rap` (`ma_cum_rap`),
  CONSTRAINT `RapPhim_ibfk_1` FOREIGN KEY (`ma_cum_rap`) REFERENCES `CumRap` (`ma_cum_rap`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `Banner` (`ma_banner`, `ma_phim`, `hinh_anh`) VALUES
(41, 1, 'image1.jpg');
INSERT INTO `Banner` (`ma_banner`, `ma_phim`, `hinh_anh`) VALUES
(42, 2, 'image2.jpg');
INSERT INTO `Banner` (`ma_banner`, `ma_phim`, `hinh_anh`) VALUES
(43, 3, 'image3.jpg');
INSERT INTO `Banner` (`ma_banner`, `ma_phim`, `hinh_anh`) VALUES
(44, 4, 'image4.jpg'),
(45, 5, 'image5.jpg'),
(46, 6, 'image6.jpg'),
(47, 7, 'image7.jpg'),
(48, 8, 'image8.jpg'),
(49, 9, 'image9.jpg'),
(50, 10, 'image10.jpg'),
(51, 11, 'image11.jpg'),
(52, 12, 'image12.jpg'),
(53, 13, 'image13.jpg');

INSERT INTO `CumRap` (`ma_cum_rap`, `ten_cum_rap`, `dia_chi`, `ma_he_thong_rap`) VALUES
(1, 'CumRap A', '123 Đường A, Quận 1', 1);
INSERT INTO `CumRap` (`ma_cum_rap`, `ten_cum_rap`, `dia_chi`, `ma_he_thong_rap`) VALUES
(2, 'CumRap B', '456 Đường B, Quận 2', 2);
INSERT INTO `CumRap` (`ma_cum_rap`, `ten_cum_rap`, `dia_chi`, `ma_he_thong_rap`) VALUES
(3, 'CumRap C', '789 Đường C, Quận 3', 3);
INSERT INTO `CumRap` (`ma_cum_rap`, `ten_cum_rap`, `dia_chi`, `ma_he_thong_rap`) VALUES
(4, 'CumRap D', '101 Đường D, Quận 4', 4),
(5, 'CumRap E', '111 Đường E, Quận 5', 5),
(6, 'CumRap F', '222 Đường F, Quận 6', 6),
(7, 'CumRap G', '333 Đường G, Quận 7', 7),
(8, 'CumRap H', '444 Đường H, Quận 8', 8),
(9, 'CumRap I', '555 Đường I, Quận 9', 9),
(10, 'CumRap J', '666 Đường J, Quận 10', 10),
(11, 'CumRap K', '777 Đường K, Quận 11', 11),
(12, 'CumRap L', '888 Đường L, Quận 12', 12),
(13, 'CumRap M', '999 Đường M, Quận Gò Vấp', 13),
(14, 'CumRap N', '1010 Đường N, Quận Tân Bình', 14),
(15, 'CumRap O', '1111 Đường O, Quận Tân Phú', 15),
(16, 'CumRap P', '1212 Đường P, Quận Bình Thạnh', 16),
(17, 'CumRap Q', '1313 Đường Q, Quận Phú Nhuận', 17),
(18, 'CumRap R', '1414 Đường R, Quận Thủ Đức', 18),
(19, 'CumRap S', '1515 Đường S, Quận Bình Tân', 19),
(20, 'CumRap T', '1616 Đường T, Quận Củ Chi', 20);

INSERT INTO `DatVe` (`ve_id`, `tai_khoan`, `ma_lich_chieu`, `ma_ghe`) VALUES
(58, 1, 21, 5);
INSERT INTO `DatVe` (`ve_id`, `tai_khoan`, `ma_lich_chieu`, `ma_ghe`) VALUES
(59, 1, 21, 6);
INSERT INTO `DatVe` (`ve_id`, `tai_khoan`, `ma_lich_chieu`, `ma_ghe`) VALUES
(60, 1, 21, 7);
INSERT INTO `DatVe` (`ve_id`, `tai_khoan`, `ma_lich_chieu`, `ma_ghe`) VALUES
(61, 1, 21, 8),
(62, 1, 21, 9),
(64, 1, 30, 10);

INSERT INTO `Ghe` (`ma_ghe`, `ten_ghe`, `loai_ghe`, `ma_rap`) VALUES
(1, 'Ghế 1', 'VIP', 1);
INSERT INTO `Ghe` (`ma_ghe`, `ten_ghe`, `loai_ghe`, `ma_rap`) VALUES
(2, 'Ghế 2', 'Thường', 1);
INSERT INTO `Ghe` (`ma_ghe`, `ten_ghe`, `loai_ghe`, `ma_rap`) VALUES
(3, 'Ghế 3', 'VIP', 2);
INSERT INTO `Ghe` (`ma_ghe`, `ten_ghe`, `loai_ghe`, `ma_rap`) VALUES
(4, 'Ghế 4', 'Thường', 2),
(5, 'Ghế 5', 'VIP', 3),
(6, 'Ghế 6', 'Thường', 3),
(7, 'Ghế 7', 'VIP', 4),
(8, 'Ghế 8', 'Thường', 4),
(9, 'Ghế 9', 'VIP', 5),
(10, 'Ghế 10', 'Thường', 5),
(11, 'Ghế 11', 'VIP', 6),
(12, 'Ghế 12', 'Thường', 6),
(13, 'Ghế 13', 'VIP', 7),
(14, 'Ghế 14', 'Thường', 7),
(15, 'Ghế 15', 'VIP', 8),
(16, 'Ghế 16', 'Thường', 8),
(17, 'Ghế 17', 'VIP', 9),
(18, 'Ghế 18', 'Thường', 9),
(19, 'Ghế 19', 'VIP', 10),
(20, 'Ghế 20', 'Thường', 10),
(21, 'Ghế 21', 'VIP', 11),
(22, 'Ghế 22', 'Thường', 11),
(23, 'Ghế 23', 'VIP', 12),
(24, 'Ghế 24', 'Thường', 12),
(25, 'Ghế 25', 'VIP', 13),
(26, 'Ghế 26', 'Thường', 13),
(27, 'Ghế 27', 'VIP', 14),
(28, 'Ghế 28', 'Thường', 14),
(29, 'Ghế 29', 'VIP', 15),
(30, 'Ghế 30', 'Thường', 15),
(31, 'Ghế 31', 'VIP', 16),
(32, 'Ghế 32', 'Thường', 16),
(33, 'Ghế 33', 'VIP', 17),
(34, 'Ghế 34', 'Thường', 17),
(35, 'Ghế 35', 'VIP', 18),
(36, 'Ghế 36', 'Thường', 18),
(37, 'Ghế 37', 'VIP', 19),
(38, 'Ghế 38', 'Thường', 19),
(39, 'Ghế 39', 'VIP', 20),
(40, 'Ghế 40', 'Thường', 20);

INSERT INTO `HeThongRap` (`ma_he_thong_rap`, `ten_he_thong_rap`, `logo`) VALUES
(1, 'CGV', 'cgv_logo.jpg');
INSERT INTO `HeThongRap` (`ma_he_thong_rap`, `ten_he_thong_rap`, `logo`) VALUES
(2, 'Lotteria', 'lotteria_logo.jpg');
INSERT INTO `HeThongRap` (`ma_he_thong_rap`, `ten_he_thong_rap`, `logo`) VALUES
(3, 'BHD', 'bhd_logo.jpg');
INSERT INTO `HeThongRap` (`ma_he_thong_rap`, `ten_he_thong_rap`, `logo`) VALUES
(4, 'Galaxy', 'galaxy_logo.jpg'),
(5, 'Lotte Cinema', 'lotte_cinema_logo.jpg'),
(6, 'Mega GS', 'megags_logo.jpg'),
(7, 'TOUCH', 'touch_logo.jpg'),
(8, 'Cinestar', 'cinestar_logo.jpg'),
(9, 'Beta', 'beta_logo.jpg'),
(10, 'DDC', 'ddc_logo.jpg'),
(11, 'IVB', 'ivb_logo.jpg'),
(12, 'Movie Star', 'moviestar_logo.jpg'),
(13, 'DCine', 'dcine_logo.jpg'),
(14, 'BlueX', 'bluex_logo.jpg'),
(15, 'Uu Dam', 'uudam_logo.jpg'),
(16, 'BFC', 'bfc_logo.jpg'),
(17, 'DD', 'dd_logo.jpg'),
(18, 'Vietstar', 'vietstar_logo.jpg'),
(19, 'TCH', 'tch_logo.jpg'),
(20, 'MKV', 'mkv_logo.jpg');

INSERT INTO `LichChieu` (`ma_lich_chieu`, `ma_rap`, `ma_phim`, `ngay_gio_chieu`, `gia_ve`) VALUES
(21, 1, 1, '2023-11-24 10:00:00', 100000);
INSERT INTO `LichChieu` (`ma_lich_chieu`, `ma_rap`, `ma_phim`, `ngay_gio_chieu`, `gia_ve`) VALUES
(22, 2, 2, '2023-11-25 12:00:00', 120000);
INSERT INTO `LichChieu` (`ma_lich_chieu`, `ma_rap`, `ma_phim`, `ngay_gio_chieu`, `gia_ve`) VALUES
(23, 3, 3, '2023-11-26 15:00:00', 90000);
INSERT INTO `LichChieu` (`ma_lich_chieu`, `ma_rap`, `ma_phim`, `ngay_gio_chieu`, `gia_ve`) VALUES
(24, 4, 4, '2023-11-27 17:00:00', 110000),
(25, 5, 5, '2023-11-28 18:30:00', 95000),
(26, 6, 6, '2023-11-29 21:00:00', 105000),
(27, 7, 7, '2023-11-30 10:30:00', 115000),
(28, 8, 8, '2023-12-01 13:45:00', 85000),
(29, 9, 9, '2023-12-02 16:20:00', 125000),
(30, 10, 10, '2023-12-03 19:10:00', 90000),
(35, 1, 1, '2023-11-24 10:00:00', 100000),
(36, 2, 2, '2023-11-25 12:00:00', 120000),
(37, 3, 3, '2023-11-26 15:00:00', 90000),
(38, 4, 4, '2023-11-27 17:00:00', 110000),
(39, 5, 5, '2023-11-28 18:30:00', 95000),
(40, 6, 6, '2023-11-29 21:00:00', 105000),
(41, 7, 7, '2023-11-30 10:30:00', 115000),
(42, 8, 8, '2023-12-01 13:45:00', 85000),
(43, 9, 9, '2023-12-02 16:20:00', 125000),
(44, 10, 10, '2023-12-03 19:10:00', 98000);

INSERT INTO `NguoiDung` (`tai_khoan`, `ho_ten`, `email`, `so_dt`, `mat_khau`, `loai_nguoi_dung`) VALUES
(1, 'Người Dùng 1', 'user1@example.com', '123456789', '$2b$10$OjFE4gPUt3TqDX8YDn401.Ukw6CXUWxrGbzQrDHTyZdL.0bjqcyCu', 'user');
INSERT INTO `NguoiDung` (`tai_khoan`, `ho_ten`, `email`, `so_dt`, `mat_khau`, `loai_nguoi_dung`) VALUES
(2, 'Người Dùng 2', 'user2@example.com', '987654321', '$2b$10$OjFE4gPUt3TqDX8YDn401.Ukw6CXUWxrGbzQrDHTyZdL.0bjqcyCu', 'user');
INSERT INTO `NguoiDung` (`tai_khoan`, `ho_ten`, `email`, `so_dt`, `mat_khau`, `loai_nguoi_dung`) VALUES
(3, 'Người Dùng 3', 'user3@example.com', '555555555', '$2b$10$OjFE4gPUt3TqDX8YDn401.Ukw6CXUWxrGbzQrDHTyZdL.0bjqcyCu', 'user');
INSERT INTO `NguoiDung` (`tai_khoan`, `ho_ten`, `email`, `so_dt`, `mat_khau`, `loai_nguoi_dung`) VALUES
(4, 'Người Dùng 4', 'user4@example.com', '666666666', '$2b$10$OjFE4gPUt3TqDX8YDn401.Ukw6CXUWxrGbzQrDHTyZdL.0bjqcyCu', 'user'),
(5, 'Người Dùng 5', 'user5@example.com', '777777777', '$2b$10$OjFE4gPUt3TqDX8YDn401.Ukw6CXUWxrGbzQrDHTyZdL.0bjqcyCu', 'user'),
(6, 'Admin 1', 'admin1@example.com', '111111111', '$2b$10$OjFE4gPUt3TqDX8YDn401.Ukw6CXUWxrGbzQrDHTyZdL.0bjqcyCu', 'admin'),
(7, 'Admin 2', 'admin2@example.com', '222222222', '$2b$10$OjFE4gPUt3TqDX8YDn401.Ukw6CXUWxrGbzQrDHTyZdL.0bjqcyCu', 'admin'),
(8, 'Admin 3', 'admin3@example.com', '333333333', '$2b$10$OjFE4gPUt3TqDX8YDn401.Ukw6CXUWxrGbzQrDHTyZdL.0bjqcyCu', 'admin'),
(9, 'Admin 4', 'admin4@example.com', '444444444', '$2b$10$OjFE4gPUt3TqDX8YDn401.Ukw6CXUWxrGbzQrDHTyZdL.0bjqcyCu', 'admin'),
(10, 'Admin 5', 'admin5@example.com', '888888888', '$2b$10$OjFE4gPUt3TqDX8YDn401.Ukw6CXUWxrGbzQrDHTyZdL.0bjqcyCu', 'admin'),
(11, 'nguyen THANH HUY', 'huy@gmail.com', '656756674646', '$2b$10$E6uHRFMdyYrAxEc2tenEge/dCbkN7D2toMJ2O4qWu3en4tTZ4kjea', 'admin');

INSERT INTO `Phim` (`ma_phim`, `ten_phim`, `trailer`, `hinh_anh`, `mo_ta`, `ngay_khoi_chieu`, `danh_gia`, `hot`, `dang_chieu`, `sap_chieu`) VALUES
(1, 'Phim 1', 'trailer_link_1', 'phim1.jpg', 'Mô tả phim 1', '2023-01-01', 4, 1, 1, 0);
INSERT INTO `Phim` (`ma_phim`, `ten_phim`, `trailer`, `hinh_anh`, `mo_ta`, `ngay_khoi_chieu`, `danh_gia`, `hot`, `dang_chieu`, `sap_chieu`) VALUES
(2, 'Phim 2', 'trailer_link_2', 'phim2.jpg', 'Mô tả phim 2', '2023-02-01', 5, 1, 1, 0);
INSERT INTO `Phim` (`ma_phim`, `ten_phim`, `trailer`, `hinh_anh`, `mo_ta`, `ngay_khoi_chieu`, `danh_gia`, `hot`, `dang_chieu`, `sap_chieu`) VALUES
(3, 'Phim 3', 'trailer_link_3', 'phim3.jpg', 'Mô tả phim 3', '2023-03-01', 3, 1, 0, 1);
INSERT INTO `Phim` (`ma_phim`, `ten_phim`, `trailer`, `hinh_anh`, `mo_ta`, `ngay_khoi_chieu`, `danh_gia`, `hot`, `dang_chieu`, `sap_chieu`) VALUES
(4, 'Phim 4', 'trailer_link_4', 'phim4.jpg', 'Mô tả phim 4', '2023-04-01', 4, 1, 0, 1),
(5, 'Phim 5', 'trailer_link_5', 'phim5.jpg', 'Mô tả phim 5', '2023-05-01', 5, 1, 0, 1),
(6, 'Phim 6', 'trailer_link_6', 'phim6.jpg', 'Mô tả phim 6', '2023-06-01', 3, 1, 0, 1),
(7, 'Phim 7', 'trailer_link_7', 'phim7.jpg', 'Mô tả phim 7', '2023-07-01', 4, 1, 0, 1),
(8, 'Phim 8', 'trailer_link_8', 'phim8.jpg', 'Mô tả phim 8', '2023-08-01', 5, 1, 0, 1),
(9, 'Phim 9', 'trailer_link_9', 'phim9.jpg', 'Mô tả phim 9', '2023-09-01', 4, 1, 0, 1),
(10, 'Phim 10', 'trailer_link_10', 'phim10.jpg', 'Mô tả phim 10', '2023-10-01', 3, 1, 0, 1),
(11, 'Phim 11', 'trailer_link_11', 'phim11.jpg', 'Mô tả phim 11', '2023-11-01', 5, 0, 0, 1),
(12, 'Phim 12', 'trailer_link_12', 'phim12.jpg', 'Mô tả phim 12', '2023-12-01', 4, 0, 0, 1),
(13, 'Phim 13', 'trailer_link_13', 'phim13.jpg', 'Mô tả phim 13', '2024-01-01', 3, 0, 0, 1),
(14, 'Phim 14', 'trailer_link_14', 'phim14.jpg', 'Mô tả phim 14', '2024-02-01', 4, 0, 0, 1);

INSERT INTO `RapPhim` (`ma_rap`, `ten_rap`, `ma_cum_rap`) VALUES
(1, 'Rạp 1', 1);
INSERT INTO `RapPhim` (`ma_rap`, `ten_rap`, `ma_cum_rap`) VALUES
(2, 'Rạp 2', 2);
INSERT INTO `RapPhim` (`ma_rap`, `ten_rap`, `ma_cum_rap`) VALUES
(3, 'Rạp 3', 3);
INSERT INTO `RapPhim` (`ma_rap`, `ten_rap`, `ma_cum_rap`) VALUES
(4, 'Rạp 4', 4),
(5, 'Rạp 5', 5),
(6, 'Rạp 6', 6),
(7, 'Rạp 7', 7),
(8, 'Rạp 8', 8),
(9, 'Rạp 9', 9),
(10, 'Rạp 10', 10),
(11, 'Rạp 11', 11),
(12, 'Rạp 12', 12),
(13, 'Rạp 13', 13),
(14, 'Rạp 14', 14),
(15, 'Rạp 15', 15),
(16, 'Rạp 16', 16),
(17, 'Rạp 17', 17),
(18, 'Rạp 18', 18),
(19, 'Rạp 19', 19),
(20, 'Rạp 20', 20);


/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;