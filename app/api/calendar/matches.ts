export interface Match {
  id: number;
  date: string; // YYYYMMDD
  time: string; // HHmmss in ET
  endTime: string;
  group: string;
  team1: string;
  team2: string;
  venue: string;
  city: string;
  stage: string;
  emoji: string;
}

export const matches: Match[] = [
  // ===== 小组赛 A组 =====
  { id: 1, date: "20260611", time: "150000", endTime: "170000", group: "A", team1: "墨西哥", team2: "南非", venue: "阿兹特克体育场", city: "墨西哥城", stage: "小组赛", emoji: "🏟️" },
  { id: 2, date: "20260611", time: "220000", endTime: "000000", group: "A", team1: "韩国", team2: "捷克", venue: "阿克伦体育场", city: "瓜达拉哈拉", stage: "小组赛", emoji: "🏟️" },
  { id: 3, date: "20260618", time: "120000", endTime: "140000", group: "A", team1: "捷克", team2: "南非", venue: "梅赛德斯-奔驰体育场", city: "亚特兰大", stage: "小组赛", emoji: "🏟️" },
  { id: 4, date: "20260618", time: "210000", endTime: "230000", group: "A", team1: "墨西哥", team2: "韩国", venue: "阿克伦体育场", city: "瓜达拉哈拉", stage: "小组赛", emoji: "🏟️" },
  { id: 5, date: "20260624", time: "210000", endTime: "230000", group: "A", team1: "捷克", team2: "墨西哥", venue: "阿兹特克体育场", city: "墨西哥城", stage: "小组赛", emoji: "🏟️" },
  { id: 6, date: "20260624", time: "210000", endTime: "230000", group: "A", team1: "南非", team2: "韩国", venue: "BBVA体育场", city: "蒙特雷", stage: "小组赛", emoji: "🏟️" },
  // ===== 小组赛 B组 =====
  { id: 7, date: "20260612", time: "150000", endTime: "170000", group: "B", team1: "加拿大", team2: "波黑", venue: "BMO球场", city: "多伦多", stage: "小组赛", emoji: "🏟️" },
  { id: 8, date: "20260613", time: "150000", endTime: "170000", group: "B", team1: "卡塔尔", team2: "瑞士", venue: "李维斯体育场", city: "旧金山", stage: "小组赛", emoji: "🏟️" },
  { id: 9, date: "20260618", time: "150000", endTime: "170000", group: "B", team1: "瑞士", team2: "波黑", venue: "SoFi体育场", city: "洛杉矶", stage: "小组赛", emoji: "🏟️" },
  { id: 10, date: "20260618", time: "180000", endTime: "200000", group: "B", team1: "加拿大", team2: "卡塔尔", venue: "BC体育馆", city: "温哥华", stage: "小组赛", emoji: "🏟️" },
  { id: 11, date: "20260624", time: "150000", endTime: "170000", group: "B", team1: "瑞士", team2: "加拿大", venue: "BC体育馆", city: "温哥华", stage: "小组赛", emoji: "🏟️" },
  { id: 12, date: "20260624", time: "150000", endTime: "170000", group: "B", team1: "波黑", team2: "卡塔尔", venue: "流明球场", city: "西雅图", stage: "小组赛", emoji: "🏟️" },
  // ===== 小组赛 C组 =====
  { id: 13, date: "20260613", time: "180000", endTime: "200000", group: "C", team1: "巴西", team2: "摩洛哥", venue: "大都会人寿体育场", city: "纽约/新泽西", stage: "小组赛", emoji: "🏟️" },
  { id: 14, date: "20260613", time: "210000", endTime: "230000", group: "C", team1: "海地", team2: "苏格兰", venue: "吉列体育场", city: "波士顿", stage: "小组赛", emoji: "🏟️" },
  { id: 15, date: "20260619", time: "180000", endTime: "200000", group: "C", team1: "苏格兰", team2: "摩洛哥", venue: "吉列体育场", city: "波士顿", stage: "小组赛", emoji: "🏟️" },
  { id: 16, date: "20260619", time: "210000", endTime: "230000", group: "C", team1: "巴西", team2: "海地", venue: "林肯金融球场", city: "费城", stage: "小组赛", emoji: "🏟️" },
  { id: 17, date: "20260624", time: "180000", endTime: "200000", group: "C", team1: "苏格兰", team2: "巴西", venue: "硬石体育场", city: "迈阿密", stage: "小组赛", emoji: "🏟️" },
  { id: 18, date: "20260624", time: "180000", endTime: "200000", group: "C", team1: "摩洛哥", team2: "海地", venue: "梅赛德斯-奔驰体育场", city: "亚特兰大", stage: "小组赛", emoji: "🏟️" },
  // ===== 小组赛 D组 =====
  { id: 19, date: "20260612", time: "210000", endTime: "230000", group: "D", team1: "美国", team2: "巴拉圭", venue: "SoFi体育场", city: "洛杉矶", stage: "小组赛", emoji: "🏟️" },
  { id: 20, date: "20260613", time: "000000", endTime: "020000", group: "D", team1: "澳大利亚", team2: "土耳其", venue: "BC体育馆", city: "温哥华", stage: "小组赛", emoji: "🏟️" },
  { id: 21, date: "20260619", time: "150000", endTime: "170000", group: "D", team1: "美国", team2: "澳大利亚", venue: "流明球场", city: "西雅图", stage: "小组赛", emoji: "🏟️" },
  { id: 22, date: "20260620", time: "000000", endTime: "020000", group: "D", team1: "土耳其", team2: "巴拉圭", venue: "李维斯体育场", city: "旧金山", stage: "小组赛", emoji: "🏟️" },
  { id: 23, date: "20260625", time: "220000", endTime: "000000", group: "D", team1: "土耳其", team2: "美国", venue: "SoFi体育场", city: "洛杉矶", stage: "小组赛", emoji: "🏟️" },
  { id: 24, date: "20260625", time: "220000", endTime: "000000", group: "D", team1: "巴拉圭", team2: "澳大利亚", venue: "李维斯体育场", city: "旧金山", stage: "小组赛", emoji: "🏟️" },
  // ===== 小组赛 E组 =====
  { id: 25, date: "20260614", time: "130000", endTime: "150000", group: "E", team1: "德国", team2: "库拉索", venue: "NRG体育场", city: "休斯顿", stage: "小组赛", emoji: "🏟️" },
  { id: 26, date: "20260614", time: "190000", endTime: "210000", group: "E", team1: "科特迪瓦", team2: "厄瓜多尔", venue: "林肯金融球场", city: "费城", stage: "小组赛", emoji: "🏟️" },
  { id: 27, date: "20260620", time: "160000", endTime: "180000", group: "E", team1: "德国", team2: "科特迪瓦", venue: "BMO球场", city: "多伦多", stage: "小组赛", emoji: "🏟️" },
  { id: 28, date: "20260620", time: "200000", endTime: "220000", group: "E", team1: "厄瓜多尔", team2: "库拉索", venue: "箭头体育场", city: "堪萨斯城", stage: "小组赛", emoji: "🏟️" },
  { id: 29, date: "20260625", time: "160000", endTime: "180000", group: "E", team1: "厄瓜多尔", team2: "德国", venue: "大都会人寿体育场", city: "纽约/新泽西", stage: "小组赛", emoji: "🏟️" },
  { id: 30, date: "20260625", time: "160000", endTime: "180000", group: "E", team1: "库拉索", team2: "科特迪瓦", venue: "林肯金融球场", city: "费城", stage: "小组赛", emoji: "🏟️" },
  // ===== 小组赛 F组 =====
  { id: 31, date: "20260614", time: "160000", endTime: "180000", group: "F", team1: "荷兰", team2: "日本", venue: "AT&T体育场", city: "达拉斯", stage: "小组赛", emoji: "🏟️" },
  { id: 32, date: "20260614", time: "220000", endTime: "000000", group: "F", team1: "瑞典", team2: "突尼斯", venue: "BBVA体育场", city: "蒙特雷", stage: "小组赛", emoji: "🏟️" },
  { id: 33, date: "20260620", time: "130000", endTime: "150000", group: "F", team1: "荷兰", team2: "瑞典", venue: "NRG体育场", city: "休斯顿", stage: "小组赛", emoji: "🏟️" },
  { id: 34, date: "20260621", time: "000000", endTime: "020000", group: "F", team1: "突尼斯", team2: "日本", venue: "BBVA体育场", city: "蒙特雷", stage: "小组赛", emoji: "🏟️" },
  { id: 35, date: "20260625", time: "190000", endTime: "210000", group: "F", team1: "日本", team2: "瑞典", venue: "AT&T体育场", city: "达拉斯", stage: "小组赛", emoji: "🏟️" },
  { id: 36, date: "20260625", time: "190000", endTime: "210000", group: "F", team1: "突尼斯", team2: "荷兰", venue: "箭头体育场", city: "堪萨斯城", stage: "小组赛", emoji: "🏟️" },
  // ===== 小组赛 G组 =====
  { id: 37, date: "20260615", time: "210000", endTime: "230000", group: "G", team1: "伊朗", team2: "新西兰", venue: "SoFi体育场", city: "洛杉矶", stage: "小组赛", emoji: "🏟️" },
  { id: 38, date: "20260615", time: "150000", endTime: "170000", group: "G", team1: "比利时", team2: "埃及", venue: "流明球场", city: "西雅图", stage: "小组赛", emoji: "🏟️" },
  { id: 39, date: "20260621", time: "150000", endTime: "170000", group: "G", team1: "比利时", team2: "伊朗", venue: "SoFi体育场", city: "洛杉矶", stage: "小组赛", emoji: "🏟️" },
  { id: 40, date: "20260621", time: "210000", endTime: "230000", group: "G", team1: "新西兰", team2: "埃及", venue: "BC体育馆", city: "温哥华", stage: "小组赛", emoji: "🏟️" },
  { id: 41, date: "20260626", time: "230000", endTime: "010000", group: "G", team1: "埃及", team2: "伊朗", venue: "流明球场", city: "西雅图", stage: "小组赛", emoji: "🏟️" },
  { id: 42, date: "20260626", time: "230000", endTime: "010000", group: "G", team1: "新西兰", team2: "比利时", venue: "BC体育馆", city: "温哥华", stage: "小组赛", emoji: "🏟️" },
  // ===== 小组赛 H组 =====
  { id: 43, date: "20260615", time: "120000", endTime: "140000", group: "H", team1: "西班牙", team2: "佛得角", venue: "梅赛德斯-奔驰体育场", city: "亚特兰大", stage: "小组赛", emoji: "🏟️" },
  { id: 44, date: "20260615", time: "180000", endTime: "200000", group: "H", team1: "沙特阿拉伯", team2: "乌拉圭", venue: "硬石体育场", city: "迈阿密", stage: "小组赛", emoji: "🏟️" },
  { id: 45, date: "20260621", time: "120000", endTime: "140000", group: "H", team1: "西班牙", team2: "沙特阿拉伯", venue: "梅赛德斯-奔驰体育场", city: "亚特兰大", stage: "小组赛", emoji: "🏟️" },
  { id: 46, date: "20260621", time: "180000", endTime: "200000", group: "H", team1: "乌拉圭", team2: "佛得角", venue: "硬石体育场", city: "迈阿密", stage: "小组赛", emoji: "🏟️" },
  { id: 47, date: "20260626", time: "200000", endTime: "220000", group: "H", team1: "佛得角", team2: "沙特阿拉伯", venue: "NRG体育场", city: "休斯顿", stage: "小组赛", emoji: "🏟️" },
  { id: 48, date: "20260626", time: "200000", endTime: "220000", group: "H", team1: "乌拉圭", team2: "西班牙", venue: "阿克伦体育场", city: "瓜达拉哈拉", stage: "小组赛", emoji: "🏟️" },
  // ===== 小组赛 I组 =====
  { id: 49, date: "20260616", time: "150000", endTime: "170000", group: "I", team1: "法国", team2: "塞内加尔", venue: "大都会人寿体育场", city: "纽约/新泽西", stage: "小组赛", emoji: "🏟️" },
  { id: 50, date: "20260616", time: "180000", endTime: "200000", group: "I", team1: "伊拉克", team2: "挪威", venue: "吉列体育场", city: "波士顿", stage: "小组赛", emoji: "🏟️" },
  { id: 51, date: "20260622", time: "170000", endTime: "190000", group: "I", team1: "法国", team2: "伊拉克", venue: "林肯金融球场", city: "费城", stage: "小组赛", emoji: "🏟️" },
  { id: 52, date: "20260622", time: "200000", endTime: "220000", group: "I", team1: "挪威", team2: "塞内加尔", venue: "大都会人寿体育场", city: "纽约/新泽西", stage: "小组赛", emoji: "🏟️" },
  { id: 53, date: "20260626", time: "150000", endTime: "170000", group: "I", team1: "挪威", team2: "法国", venue: "吉列体育场", city: "波士顿", stage: "小组赛", emoji: "🏟️" },
  { id: 54, date: "20260626", time: "150000", endTime: "170000", group: "I", team1: "塞内加尔", team2: "伊拉克", venue: "BMO球场", city: "多伦多", stage: "小组赛", emoji: "🏟️" },
  // ===== 小组赛 J组 =====
  { id: 55, date: "20260616", time: "210000", endTime: "230000", group: "J", team1: "阿根廷", team2: "阿尔及利亚", venue: "箭头体育场", city: "堪萨斯城", stage: "小组赛", emoji: "🏟️" },
  { id: 56, date: "20260617", time: "000000", endTime: "020000", group: "J", team1: "奥地利", team2: "约旦", venue: "李维斯体育场", city: "旧金山", stage: "小组赛", emoji: "🏟️" },
  { id: 57, date: "20260622", time: "130000", endTime: "150000", group: "J", team1: "阿根廷", team2: "奥地利", venue: "AT&T体育场", city: "达拉斯", stage: "小组赛", emoji: "🏟️" },
  { id: 58, date: "20260622", time: "230000", endTime: "010000", group: "J", team1: "约旦", team2: "阿尔及利亚", venue: "李维斯体育场", city: "旧金山", stage: "小组赛", emoji: "🏟️" },
  { id: 59, date: "20260627", time: "220000", endTime: "000000", group: "J", team1: "阿尔及利亚", team2: "奥地利", venue: "箭头体育场", city: "堪萨斯城", stage: "小组赛", emoji: "🏟️" },
  { id: 60, date: "20260627", time: "220000", endTime: "000000", group: "J", team1: "约旦", team2: "阿根廷", venue: "AT&T体育场", city: "达拉斯", stage: "小组赛", emoji: "🏟️" },
  // ===== 小组赛 K组 =====
  { id: 61, date: "20260617", time: "130000", endTime: "150000", group: "K", team1: "葡萄牙", team2: "刚果民主共和国", venue: "NRG体育场", city: "休斯顿", stage: "小组赛", emoji: "🏟️" },
  { id: 62, date: "20260617", time: "220000", endTime: "000000", group: "K", team1: "乌兹别克斯坦", team2: "哥伦比亚", venue: "阿兹特克体育场", city: "墨西哥城", stage: "小组赛", emoji: "🏟️" },
  { id: 63, date: "20260623", time: "130000", endTime: "150000", group: "K", team1: "葡萄牙", team2: "乌兹别克斯坦", venue: "NRG体育场", city: "休斯顿", stage: "小组赛", emoji: "🏟️" },
  { id: 64, date: "20260623", time: "220000", endTime: "000000", group: "K", team1: "哥伦比亚", team2: "刚果民主共和国", venue: "阿克伦体育场", city: "瓜达拉哈拉", stage: "小组赛", emoji: "🏟️" },
  { id: 65, date: "20260627", time: "193000", endTime: "213000", group: "K", team1: "哥伦比亚", team2: "葡萄牙", venue: "硬石体育场", city: "迈阿密", stage: "小组赛", emoji: "🏟️" },
  { id: 66, date: "20260627", time: "193000", endTime: "213000", group: "K", team1: "刚果民主共和国", team2: "乌兹别克斯坦", venue: "梅赛德斯-奔驰体育场", city: "亚特兰大", stage: "小组赛", emoji: "🏟️" },
  // ===== 小组赛 L组 =====
  { id: 67, date: "20260617", time: "160000", endTime: "180000", group: "L", team1: "英格兰", team2: "克罗地亚", venue: "AT&T体育场", city: "达拉斯", stage: "小组赛", emoji: "🏟️" },
  { id: 68, date: "20260617", time: "190000", endTime: "210000", group: "L", team1: "加纳", team2: "巴拿马", venue: "BMO球场", city: "多伦多", stage: "小组赛", emoji: "🏟️" },
  { id: 69, date: "20260623", time: "160000", endTime: "180000", group: "L", team1: "英格兰", team2: "加纳", venue: "吉列体育场", city: "波士顿", stage: "小组赛", emoji: "🏟️" },
  { id: 70, date: "20260623", time: "190000", endTime: "210000", group: "L", team1: "巴拿马", team2: "克罗地亚", venue: "BMO球场", city: "多伦多", stage: "小组赛", emoji: "🏟️" },
  { id: 71, date: "20260627", time: "170000", endTime: "190000", group: "L", team1: "巴拿马", team2: "英格兰", venue: "大都会人寿体育场", city: "纽约/新泽西", stage: "小组赛", emoji: "🏟️" },
  { id: 72, date: "20260627", time: "170000", endTime: "190000", group: "L", team1: "克罗地亚", team2: "加纳", venue: "林肯金融球场", city: "费城", stage: "小组赛", emoji: "🏟️" },
  // ===== 32强赛 =====
  { id: 73, date: "20260628", time: "150000", endTime: "170000", group: "", team1: "A组亚军", team2: "B组亚军", venue: "SoFi体育场", city: "洛杉矶", stage: "32强赛", emoji: "⚔️" },
  { id: 74, date: "20260629", time: "163000", endTime: "183000", group: "", team1: "E组冠军", team2: "最佳第三名", venue: "吉列体育场", city: "波士顿", stage: "32强赛", emoji: "⚔️" },
  { id: 75, date: "20260629", time: "210000", endTime: "230000", group: "", team1: "F组冠军", team2: "C组亚军", venue: "BBVA体育场", city: "蒙特雷", stage: "32强赛", emoji: "⚔️" },
  { id: 76, date: "20260629", time: "130000", endTime: "150000", group: "", team1: "C组冠军", team2: "F组亚军", venue: "NRG体育场", city: "休斯顿", stage: "32强赛", emoji: "⚔️" },
  { id: 77, date: "20260630", time: "170000", endTime: "190000", group: "", team1: "I组冠军", team2: "最佳第三名", venue: "大都会人寿体育场", city: "纽约/新泽西", stage: "32强赛", emoji: "⚔️" },
  { id: 78, date: "20260630", time: "130000", endTime: "150000", group: "", team1: "E组亚军", team2: "I组亚军", venue: "AT&T体育场", city: "达拉斯", stage: "32强赛", emoji: "⚔️" },
  { id: 79, date: "20260630", time: "210000", endTime: "230000", group: "", team1: "A组冠军", team2: "最佳第三名", venue: "阿兹特克体育场", city: "墨西哥城", stage: "32强赛", emoji: "⚔️" },
  { id: 80, date: "20260701", time: "120000", endTime: "140000", group: "", team1: "L组冠军", team2: "最佳第三名", venue: "梅赛德斯-奔驰体育场", city: "亚特兰大", stage: "32强赛", emoji: "⚔️" },
  { id: 81, date: "20260701", time: "200000", endTime: "220000", group: "", team1: "D组冠军", team2: "最佳第三名", venue: "李维斯体育场", city: "旧金山", stage: "32强赛", emoji: "⚔️" },
  { id: 82, date: "20260701", time: "160000", endTime: "180000", group: "", team1: "G组冠军", team2: "最佳第三名", venue: "流明球场", city: "西雅图", stage: "32强赛", emoji: "⚔️" },
  { id: 83, date: "20260702", time: "190000", endTime: "210000", group: "", team1: "K组亚军", team2: "L组亚军", venue: "BMO球场", city: "多伦多", stage: "32强赛", emoji: "⚔️" },
  { id: 84, date: "20260702", time: "150000", endTime: "170000", group: "", team1: "H组冠军", team2: "J组亚军", venue: "SoFi体育场", city: "洛杉矶", stage: "32强赛", emoji: "⚔️" },
  { id: 85, date: "20260702", time: "230000", endTime: "010000", group: "", team1: "B组冠军", team2: "最佳第三名", venue: "BC体育馆", city: "温哥华", stage: "32强赛", emoji: "⚔️" },
  { id: 86, date: "20260703", time: "180000", endTime: "200000", group: "", team1: "J组冠军", team2: "H组亚军", venue: "硬石体育场", city: "迈阿密", stage: "32强赛", emoji: "⚔️" },
  { id: 87, date: "20260703", time: "213000", endTime: "233000", group: "", team1: "K组冠军", team2: "最佳第三名", venue: "箭头体育场", city: "堪萨斯城", stage: "32强赛", emoji: "⚔️" },
  { id: 88, date: "20260703", time: "140000", endTime: "160000", group: "", team1: "D组亚军", team2: "G组亚军", venue: "AT&T体育场", city: "达拉斯", stage: "32强赛", emoji: "⚔️" },
  // ===== 16强赛 =====
  { id: 89, date: "20260704", time: "170000", endTime: "190000", group: "", team1: "待定", team2: "待定", venue: "林肯金融球场", city: "费城", stage: "16强赛", emoji: "⚔️" },
  { id: 90, date: "20260704", time: "130000", endTime: "150000", group: "", team1: "待定", team2: "待定", venue: "NRG体育场", city: "休斯顿", stage: "16强赛", emoji: "⚔️" },
  { id: 91, date: "20260705", time: "160000", endTime: "180000", group: "", team1: "待定", team2: "待定", venue: "大都会人寿体育场", city: "纽约/新泽西", stage: "16强赛", emoji: "⚔️" },
  { id: 92, date: "20260705", time: "200000", endTime: "220000", group: "", team1: "待定", team2: "待定", venue: "阿兹特克体育场", city: "墨西哥城", stage: "16强赛", emoji: "⚔️" },
  { id: 93, date: "20260706", time: "150000", endTime: "170000", group: "", team1: "待定", team2: "待定", venue: "AT&T体育场", city: "达拉斯", stage: "16强赛", emoji: "⚔️" },
  { id: 94, date: "20260706", time: "200000", endTime: "220000", group: "", team1: "待定", team2: "待定", venue: "流明球场", city: "西雅图", stage: "16强赛", emoji: "⚔️" },
  { id: 95, date: "20260707", time: "120000", endTime: "140000", group: "", team1: "待定", team2: "待定", venue: "梅赛德斯-奔驰体育场", city: "亚特兰大", stage: "16强赛", emoji: "⚔️" },
  { id: 96, date: "20260707", time: "160000", endTime: "180000", group: "", team1: "待定", team2: "待定", venue: "BC体育馆", city: "温哥华", stage: "16强赛", emoji: "⚔️" },
  // ===== 1/4决赛 =====
  { id: 97, date: "20260709", time: "160000", endTime: "180000", group: "", team1: "待定", team2: "待定", venue: "吉列体育场", city: "波士顿", stage: "1/4决赛", emoji: "🏆" },
  { id: 98, date: "20260710", time: "150000", endTime: "170000", group: "", team1: "待定", team2: "待定", venue: "SoFi体育场", city: "洛杉矶", stage: "1/4决赛", emoji: "🏆" },
  { id: 99, date: "20260711", time: "170000", endTime: "190000", group: "", team1: "待定", team2: "待定", venue: "硬石体育场", city: "迈阿密", stage: "1/4决赛", emoji: "🏆" },
  { id: 100, date: "20260711", time: "210000", endTime: "230000", group: "", team1: "待定", team2: "待定", venue: "箭头体育场", city: "堪萨斯城", stage: "1/4决赛", emoji: "🏆" },
  // ===== 半决赛 =====
  { id: 101, date: "20260714", time: "150000", endTime: "170000", group: "", team1: "待定", team2: "待定", venue: "AT&T体育场", city: "达拉斯", stage: "半决赛", emoji: "🏆" },
  { id: 102, date: "20260715", time: "150000", endTime: "170000", group: "", team1: "待定", team2: "待定", venue: "梅赛德斯-奔驰体育场", city: "亚特兰大", stage: "半决赛", emoji: "🏆" },
  // ===== 三四名决赛 =====
  { id: 103, date: "20260718", time: "170000", endTime: "190000", group: "", team1: "待定", team2: "待定", venue: "硬石体育场", city: "迈阿密", stage: "三四名决赛", emoji: "🏆" },
  // ===== 决赛 =====
  { id: 104, date: "20260719", time: "150000", endTime: "170000", group: "", team1: "待定", team2: "待定", venue: "大都会人寿体育场", city: "纽约/新泽西", stage: "决赛", emoji: "🏆" },
];
