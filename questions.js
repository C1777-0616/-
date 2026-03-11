// 每个选项的 scores 字段是一个“建筑风格 → 分数增量”的映射
// 可用风格 key:
// modernism（现代主义）、classicism（古典主义）、baroque（巴洛克）、
// japMinimal（日式极简）、nordic（北欧）、industrial（工业风）、
// neoChinese（新中式）、mediterranean（地中海）

// 精简版题库：共 36 题，尽量减少场景重复
const QUESTIONS = [
  // ========= 日常生活 · 回家篇（6 题）=========
  {
    id: 1,
    category: "日常生活 · 回家",
    title:
      "一天结束，你走进理想中的家门。最让你有“回到自己世界”的感觉的是？",
    options: [
      {
        label: "A",
        text: "大块留白+纯净墙面，没有多余装饰，但每个功能都布置得刚刚好。",
        scores: { modernism: 2 },
      },
      {
        label: "B",
        text: "门厅有画框、壁灯和精致的小桌，像走进自己专属的小宫殿。",
        scores: { classicism: 2, baroque: 1 },
      },
      {
        label: "C",
        text: "木质地板、淡色墙面、植物和柔光，一进门就想深呼吸。",
        scores: { japMinimal: 1, nordic: 2 },
      },
      {
        label: "D",
        text: "半开放的玄关，看到的是砖墙、水泥和金属架子，有点像工作室。",
        scores: { industrial: 2 },
      },
    ],
  },
  {
    id: 2,
    category: "日常生活 · 空间大小",
    title:
      "你被安排住进一个 30 平方的小户型，三年不能搬家，你最在意的是？",
    options: [
      {
        label: "A",
        text: "动线顺滑、收纳隐藏、墙面干净，“小但高效”是关键词。",
        scores: { modernism: 2, japMinimal: 1 },
      },
      {
        label: "B",
        text: "有一扇大窗+小阳台，可以晒太阳、养植物、远眺天空。",
        scores: { nordic: 2, mediterranean: 1 },
      },
      {
        label: "C",
        text: "有一整面书架或展示区，摆满书、器物、旅行战利品。",
        scores: { classicism: 1, neoChinese: 1, baroque: 1 },
      },
      {
        label: "D",
        text: "墙面可随意打孔、涂鸦，家具可以改造，像私人实验室。",
        scores: { industrial: 2, modernism: 1 },
      },
    ],
  },
  {
    id: 3,
    category: "日常生活 · 早晨",
    title: "理想早晨，你最想在怎样的卧室里醒来？",
    options: [
      {
        label: "A",
        text: "极简大床+低矮床头柜，窗外是城市天际线。",
        scores: { modernism: 2 },
      },
      {
        label: "B",
        text: "带有线脚和床幔的经典床，晨光透过厚重窗帘的一条缝。",
        scores: { classicism: 1, baroque: 2 },
      },
      {
        label: "C",
        text: "榻榻米或低矮床垫，推开拉门是小庭院或阳台绿植。",
        scores: { japMinimal: 2, neoChinese: 1 },
      },
      {
        label: "D",
        text: "白墙+浅木地板+柔软织物，整个房间像一杯拿铁。",
        scores: { nordic: 2 },
      },
    ],
  },
  {
    id: 4,
    category: "日常生活 · 厨房",
    title: "理想中的厨房，更接近哪一种？",
    options: [
      {
        label: "A",
        text: "一字型或中岛台，柜门都隐藏把手，像一件巨大的家具。",
        scores: { modernism: 2 },
      },
      {
        label: "B",
        text: "有精致吊灯、石膏线和花纹瓷砖，做饭像在拍年代电影。",
        scores: { classicism: 1, baroque: 2 },
      },
      {
        label: "C",
        text: "木柜+开放搁板，杯子和碗碟整齐排放，像日剧里的小厨房。",
        scores: { japMinimal: 2, nordic: 1 },
      },
      {
        label: "D",
        text: "白墙+蓝色瓷砖、粗糙台面，推开窗就是阳光和风。",
        scores: { mediterranean: 2 },
      },
    ],
  },
  {
    id: 5,
    category: "日常生活 · 客厅",
    title: "如果只能保留一件客厅里的“大件”，你会留？",
    options: [
      {
        label: "A",
        text: "一张线条干净的沙发+小茶几，其他都可以很简。",
        scores: { modernism: 2 },
      },
      {
        label: "B",
        text: "一面展示柜/壁炉区，上面可以放相框、摆件和书。",
        scores: { classicism: 1, neoChinese: 1, baroque: 1 },
      },
      {
        label: "C",
        text: "一大面木质收纳+开放格子，让物品和留白混在一起。",
        scores: { japMinimal: 1, nordic: 2 },
      },
      {
        label: "D",
        text: "一面粗糙的水泥/砖墙，再配上夸张的艺术画或霓虹灯。",
        scores: { industrial: 2 },
      },
    ],
  },
  {
    id: 6,
    category: "日常生活 · 浴室",
    title: "洗澡这件小事，你更想要怎样的浴室？",
    options: [
      {
        label: "A",
        text: "白砖+极简玻璃隔断，像酒店里的干净浴室。",
        scores: { modernism: 2 },
      },
      {
        label: "B",
        text: "弧形浴缸+金色龙头+壁灯，泡澡像参加私人宴会。",
        scores: { baroque: 2, classicism: 1 },
      },
      {
        label: "C",
        text: "木质地台+石材+绿植，像小型温泉旅馆。",
        scores: { japMinimal: 1, nordic: 1, neoChinese: 1 },
      },
      {
        label: "D",
        text: "蓝白瓷砖、拱形墙面，像地中海小镇里的浴室。",
        scores: { mediterranean: 2 },
      },
    ],
  },

  // ========= 城市漫步 · 旅行篇（10 题）=========
  {
    id: 7,
    category: "旅行 · 初印象",
    title: "第一次到一个陌生城市，你会先去哪里感受它？",
    options: [
      {
        label: "A",
        text: "大师设计的当代美术馆/图书馆，建筑本身就是展品。",
        scores: { modernism: 2, industrial: 1 },
      },
      {
        label: "B",
        text: "保留完好的老街区，有石板路、阳台和教堂钟声。",
        scores: { classicism: 2, baroque: 1 },
      },
      {
        label: "C",
        text: "传统街巷或古城墙，能看到当地人真正的日常生活。",
        scores: { neoChinese: 2, classicism: 1 },
      },
      {
        label: "D",
        text: "滨海/山城小镇，有白墙、蓝窗和成片的屋顶。",
        scores: { mediterranean: 2, nordic: 1 },
      },
    ],
  },
  {
    id: 8,
    category: "旅行 · 街道",
    title: "你理想中最想逛一整天的街道是？",
    options: [
      {
        label: "A",
        text: "宽敞、整洁、玻璃幕墙林立的现代商业街。",
        scores: { modernism: 2 },
      },
      {
        label: "B",
        text: "两侧是雕花阳台和拱廊的欧洲老街。",
        scores: { classicism: 1, baroque: 2 },
      },
      {
        label: "C",
        text: "有小神社、小店和木建筑的安静街巷。",
        scores: { japMinimal: 2, neoChinese: 1 },
      },
      {
        label: "D",
        text: "沿着海边或山坡蜿蜒，一路是台阶、白墙和蓝色门窗。",
        scores: { mediterranean: 2, nordic: 1 },
      },
    ],
  },
  {
    id: 9,
    category: "旅行 · 广场",
    title: "你在一个广场上，四周有四栋建筑，你会第一眼看向哪一栋？",
    options: [
      {
        label: "A",
        text: "通体玻璃的极简盒子，内部一览无余。",
        scores: { modernism: 2 },
      },
      {
        label: "B",
        text: "有柱廊、台阶和雕像的庄严建筑。",
        scores: { classicism: 2 },
      },
      {
        label: "C",
        text: "曲线、镀金和大量装饰的戏剧性建筑。",
        scores: { baroque: 2 },
      },
      {
        label: "D",
        text: "白墙+拱门+蓝色窗框，背后是洒满阳光的天空。",
        scores: { mediterranean: 2 },
      },
    ],
  },
  {
    id: 10,
    category: "旅行 · 拍照",
    title: "如果只能拍一张照片发朋友圈，你会选择？",
    options: [
      {
        label: "A",
        text: "建筑与光影构成的极简构图。",
        scores: { modernism: 2, japMinimal: 1 },
      },
      {
        label: "B",
        text: "拱门、长廊和雕刻细节的近景。",
        scores: { classicism: 1, baroque: 2 },
      },
      {
        label: "C",
        text: "老街上晾衣服的人、骑车的小孩、斑驳墙面。",
        scores: { neoChinese: 2, mediterranean: 1 },
      },
      {
        label: "D",
        text: "废弃工厂、铁轨、带涂鸦的墙。",
        scores: { industrial: 2 },
      },
    ],
  },
  {
    id: 11,
    category: "旅行 · 住宿",
    title: "旅行住宿，你更想体验哪种酒店/民宿？",
    options: [
      {
        label: "A",
        text: "通透玻璃盒子，视野极好，室内设计干净利落。",
        scores: { modernism: 2 },
      },
      {
        label: "B",
        text: "古老建筑改造的酒店，保留壁炉、楼梯和窗框细节。",
        scores: { classicism: 2, baroque: 1 },
      },
      {
        label: "C",
        text: "日式旅馆/和式民宿，有庭院、木质走廊和榻榻米。",
        scores: { japMinimal: 2, neoChinese: 1 },
      },
      {
        label: "D",
        text: "海边或山上白墙小屋，阳台就能看到日出/日落。",
        scores: { mediterranean: 2, nordic: 1 },
      },
    ],
  },
  {
    id: 12,
    category: "旅行 · 城市夜晚",
    title: "城市的夜晚，你最想在哪里停下来多待一会？",
    options: [
      {
        label: "A",
        text: "玻璃幕墙写字楼之间，反射着霓虹和车流。",
        scores: { modernism: 1, industrial: 1 },
      },
      {
        label: "B",
        text: "有老教堂、钟楼和橘黄色路灯的广场。",
        scores: { classicism: 2, baroque: 1 },
      },
      {
        label: "C",
        text: "河边的步道，灯光映在水面，远处是连绵的屋顶和塔楼。",
        scores: { neoChinese: 2, mediterranean: 1 },
      },
      {
        label: "D",
        text: "旧工厂改造的文化园区，咖啡馆、live house 和画廊混在一起。",
        scores: { industrial: 2 },
      },
    ],
  },
  {
    id: 13,
    category: "旅行 · 公共空间",
    title: "在一个大型公共建筑（比如车站/机场），你最在意什么？",
    options: [
      {
        label: "A",
        text: "指引清晰、动线简单、空间一眼就能看懂。",
        scores: { modernism: 2 },
      },
      {
        label: "B",
        text: "有大跨度拱顶/穹顶，让人一进来就“哇”一声。",
        scores: { classicism: 1, baroque: 2 },
      },
      {
        label: "C",
        text: "有自然光、绿植和可坐下来的安静角落。",
        scores: { nordic: 2, japMinimal: 1 },
      },
      {
        label: "D",
        text: "能看到结构和材料本身，像走进一台巨大机器的内部。",
        scores: { industrial: 2 },
      },
    ],
  },
  {
    id: 14,
    category: "旅行 · 边界",
    title: "如果只能在下列地方散步一小时，你会选？",
    options: [
      {
        label: "A",
        text: "城市与海相接的防波堤和临海步道。",
        scores: { mediterranean: 2, nordic: 1 },
      },
      {
        label: "B",
        text: "城市与山相接的山脚社区，看房子怎么顺着山势建。",
        scores: { neoChinese: 2, mediterranean: 1 },
      },
      {
        label: "C",
        text: "城市与农田/森林之间的过渡地带。",
        scores: { nordic: 1, japMinimal: 1 },
      },
      {
        label: "D",
        text: "城市与工业区相接的边界，有铁路、仓库和巨大机器。",
        scores: { industrial: 2 },
      },
    ],
  },
  {
    id: 15,
    category: "旅行 · 迷路",
    title: "如果一定要在一个区域迷路，你会选择？",
    options: [
      {
        label: "A",
        text: "由多栋现代建筑组成的“玻璃峡谷”。",
        scores: { modernism: 2 },
      },
      {
        label: "B",
        text: "有拱廊和小广场的古典街区迷宫。",
        scores: { classicism: 2, baroque: 1 },
      },
      {
        label: "C",
        text: "石板路+石阶的山城/海边小镇。",
        scores: { mediterranean: 2 },
      },
      {
        label: "D",
        text: "旧厂房、仓库和铁路交织的工业区。",
        scores: { industrial: 2 },
      },
    ],
  },
  {
    id: 16,
    category: "旅行 · 天气",
    title: "下雨天时，哪种建筑让你更想钻进去避雨？",
    options: [
      {
        label: "A",
        text: "大玻璃雨帘之后的现代大厅。",
        scores: { modernism: 2 },
      },
      {
        label: "B",
        text: "有檐廊和深窗洞的古典建筑。",
        scores: { classicism: 2, neoChinese: 1 },
      },
      {
        label: "C",
        text: "有木格窗、内廊和小庭院的建筑。",
        scores: { japMinimal: 1, neoChinese: 2 },
      },
      {
        label: "D",
        text: "拱廊下的咖啡馆，雨水顺着拱洞落下去。",
        scores: { mediterranean: 2 },
      },
    ],
  },

  // ========= 特殊情景 · 极端设定（8 题）=========
  {
    id: 17,
    category: "特殊情景 · 极端天气",
    title:
      "气象预警发布：一场几十年一遇的暴雨即将到来，你必须在一栋建筑里躲 24 小时，你更信任哪一种？",
    options: [
      {
        label: "A",
        text: "看上去朴素但结构清晰的混凝土建筑，没有奇怪造型。",
        scores: { modernism: 2, industrial: 1 },
      },
      {
        label: "B",
        text: "已经屹立几百年的老建筑，表面有岁月痕迹，但你觉得它“经得住事儿”。",
        scores: { classicism: 2, neoChinese: 1 },
      },
      {
        label: "C",
        text: "半地下、半围合的庭院式建筑，中间有树和小水面。",
        scores: { japMinimal: 1, neoChinese: 1, nordic: 1 },
      },
      {
        label: "D",
        text: "海边高地上的白墙建筑群，像一座小城堡。",
        scores: { mediterranean: 2 },
      },
    ],
  },
  {
    id: 18,
    category: "特殊情景 · 火星城市",
    title: "假如你被邀请去“火星第一座城市”当体验居民，你希望自己的房子是？",
    options: [
      {
        label: "A",
        text: "纯白极简舱体，所有家具模块化、可移动，像住在一台干净的机器里。",
        scores: { modernism: 2 },
      },
      {
        label: "B",
        text: "仿地球古城的小街区，有拱门、广场和喷泉，让你忘记自己在火星。",
        scores: { classicism: 1, mediterranean: 2 },
      },
      {
        label: "C",
        text: "半地下、半透明穹顶，可以种植物，看得到星空和城市轮廓。",
        scores: { japMinimal: 1, nordic: 1, neoChinese: 1 },
      },
      {
        label: "D",
        text: "由多个舱体和管道拼接的工业感聚落，夜晚灯光特别好看。",
        scores: { industrial: 2 },
      },
    ],
  },
  {
    id: 19,
    category: "特殊情景 · 秘密基地",
    title: "如果你拥有一座“秘密基地”，它会是什么样？",
    options: [
      {
        label: "A",
        text: "隐藏在城市高楼之间的一间极简顶楼工作室。",
        scores: { modernism: 2 },
      },
      {
        label: "B",
        text: "藏在老城区深巷里的一栋翻新小楼，有天井和暗门。",
        scores: { neoChinese: 2, classicism: 1 },
      },
      {
        label: "C",
        text: "埋在山体里，只露出一面玻璃看森林。",
        scores: { japMinimal: 1, nordic: 1 },
      },
      {
        label: "D",
        text: "建在废弃工业区的一处仓库，室内可以随便改造。",
        scores: { industrial: 2 },
      },
    ],
  },
  {
    id: 20,
    category: "特殊情景 · 世界只剩一城",
    title: "如果世界只剩下一座城市，你希望它长什么样？",
    options: [
      {
        label: "A",
        text: "理性有序的高密度城市，高效但不冰冷。",
        scores: { modernism: 2 },
      },
      {
        label: "B",
        text: "保留了大量古典建筑和长轴线广场的城市。",
        scores: { classicism: 2, baroque: 1 },
      },
      {
        label: "C",
        text: "有山有水，有胡同/巷子，有现代也有旧时光痕迹。",
        scores: { neoChinese: 2, nordic: 1 },
      },
      {
        label: "D",
        text: "被海环绕的分散小镇城市，每一处都是度假感。",
        scores: { mediterranean: 2 },
      },
    ],
  },
  {
    id: 21,
    category: "特殊情景 · 孤独时刻",
    title: "你想在哪种建筑里独处一整天？",
    options: [
      {
        label: "A",
        text: "现代艺术馆的一间安静休息区或书店角落。",
        scores: { modernism: 2 },
      },
      {
        label: "B",
        text: "古老教堂/寺庙的侧廊和小院。",
        scores: { classicism: 1, neoChinese: 2 },
      },
      {
        label: "C",
        text: "山中的木屋或海边的小白房。",
        scores: { nordic: 1, mediterranean: 2 },
      },
      {
        label: "D",
        text: "改造过的厂房里，周围是工作室和画室。",
        scores: { industrial: 2 },
      },
    ],
  },
  {
    id: 22,
    category: "特殊情景 · 电影场景",
    title: "如果你是电影角色，你更想在哪种建筑里登场？",
    options: [
      {
        label: "A",
        text: "一座线条明晰、玻璃通透的顶楼公寓，俯瞰城市。",
        scores: { modernism: 2 },
      },
      {
        label: "B",
        text: "有长长楼梯、吊灯和厅堂的古堡或老宅。",
        scores: { classicism: 1, baroque: 2 },
      },
      {
        label: "C",
        text: "带日式庭院或竹林的小建筑，光影在木格栅上流动。",
        scores: { japMinimal: 2, neoChinese: 1 },
      },
      {
        label: "D",
        text: "废墟感十足的旧厂房或仓库，上面有你的秘密基地。",
        scores: { industrial: 2 },
      },
    ],
  },
  {
    id: 23,
    category: "特殊情景 · 时间旅行",
    title: "如果你可以穿越去一个建筑时代短住，你会选？",
    options: [
      {
        label: "A",
        text: "清爽的现代主义黄金年代，住进“玻璃盒子”别墅。",
        scores: { modernism: 2 },
      },
      {
        label: "B",
        text: "古典宫廷时代，住进有柱廊和台阶的城市大道边。",
        scores: { classicism: 2 },
      },
      {
        label: "C",
        text: "巴洛克/洛可可时期，整天在戏剧性宫殿里转悠。",
        scores: { baroque: 2 },
      },
      {
        label: "D",
        text: "地中海港口城市最热闹的那几年，白墙蓝窗都新得发光。",
        scores: { mediterranean: 2 },
      },
    ],
  },
  {
    id: 24,
    category: "特殊情景 · 终极房子",
    title: "如果只能拥有一栋“终极房子”，它更接近？",
    options: [
      {
        label: "A",
        text: "一栋极简、通透、功能高效的现代住宅。",
        scores: { modernism: 3 },
      },
      {
        label: "B",
        text: "一栋带庭院、长廊和仪式感满满空间的经典住宅。",
        scores: { classicism: 2, baroque: 1, neoChinese: 1 },
      },
      {
        label: "C",
        text: "一栋被自然包裹、内部是木头和柔光的疗愈系住宅。",
        scores: { japMinimal: 1, nordic: 2, neoChinese: 1 },
      },
      {
        label: "D",
        text: "一栋靠近海或港口、可以任意改造的自由房子。",
        scores: { mediterranean: 2, industrial: 1 },
      },
    ],
  },

  // ========= 细节偏好 · 材料与光（6 题）=========
  {
    id: 25,
    category: "细节偏好 · 材料",
    title: "如果只能在家里大量使用一种材料，你会选？",
    options: [
      {
        label: "A",
        text: "大块玻璃和金属，干净利落。",
        scores: { modernism: 2 },
      },
      {
        label: "B",
        text: "石材和线条丰富的线脚，质感厚重。",
        scores: { classicism: 2, baroque: 1 },
      },
      {
        label: "C",
        text: "木头和亚麻布，触感温暖。",
        scores: { japMinimal: 1, nordic: 2, neoChinese: 1 },
      },
      {
        label: "D",
        text: "水泥、红砖和黑色金属。",
        scores: { industrial: 2 },
      },
    ],
  },
  {
    id: 26,
    category: "细节偏好 · 光线",
    title: "你最着迷哪种光线在空间里的效果？",
    options: [
      {
        label: "A",
        text: "强烈阳光在纯白墙面上形成的清晰明暗对比。",
        scores: { modernism: 2, mediterranean: 1 },
      },
      {
        label: "B",
        text: "透过彩色玻璃或复杂窗洞投射出的斑驳光影。",
        scores: { classicism: 1, baroque: 2 },
      },
      {
        label: "C",
        text: "被纸门/百叶柔和过滤后的散射光。",
        scores: { japMinimal: 2, neoChinese: 1 },
      },
      {
        label: "D",
        text: "工业区黄昏时的长阴影和钝钝的天空。",
        scores: { industrial: 2 },
      },
    ],
  },
  {
    id: 27,
    category: "细节偏好 · 色彩",
    title: "你更愿意长期待在怎样色调的空间里？",
    options: [
      {
        label: "A",
        text: "黑白灰为主，搭配少量亮色点缀。",
        scores: { modernism: 2 },
      },
      {
        label: "B",
        text: "偏奶油、米色，再加入金色和宝石色点缀。",
        scores: { classicism: 1, baroque: 2 },
      },
      {
        label: "C",
        text: "木色+白色+少量低饱和绿色/灰蓝。",
        scores: { nordic: 2, japMinimal: 1 },
      },
      {
        label: "D",
        text: "白墙+蓝色/湖绿色+一点日晒的砖色。",
        scores: { mediterranean: 2 },
      },
    ],
  },
  {
    id: 28,
    category: "细节偏好 · 装饰",
    title: "如果只能在家里挂一样“装饰品”，你更想挂？",
    options: [
      {
        label: "A",
        text: "一幅极简抽象画或摄影作品。",
        scores: { modernism: 2 },
      },
      {
        label: "B",
        text: "一幅带金色边框的油画或镜子。",
        scores: { classicism: 1, baroque: 2 },
      },
      {
        label: "C",
        text: "一幅水墨画/版画，或者简单的书法。",
        scores: { neoChinese: 2, japMinimal: 1 },
      },
      {
        label: "D",
        text: "一个立体的小装置/霓虹字或金属艺术品。",
        scores: { industrial: 2 },
      },
    ],
  },
  {
    id: 29,
    category: "细节偏好 · 窗户",
    title: "你最喜欢哪种窗户形状？",
    options: [
      {
        label: "A",
        text: "从地面到顶的大落地窗。",
        scores: { modernism: 2 },
      },
      {
        label: "B",
        text: "有线脚和小阳台的高窗。",
        scores: { classicism: 2, baroque: 1 },
      },
      {
        label: "C",
        text: "带格栅/纸拉门的长条窗或横窗。",
        scores: { japMinimal: 1, neoChinese: 2 },
      },
      {
        label: "D",
        text: "拱形小窗或蓝色框架的方窗。",
        scores: { mediterranean: 2 },
      },
    ],
  },
  {
    id: 30,
    category: "细节偏好 · 楼梯",
    title: "哪种楼梯让你“忍不住想多走几遍”？",
    options: [
      {
        label: "A",
        text: "悬浮在空中的极简楼梯。",
        scores: { modernism: 2 },
      },
      {
        label: "B",
        text: "有雕花扶手和大转角平台的古典楼梯。",
        scores: { classicism: 1, baroque: 2 },
      },
      {
        label: "C",
        text: "木制窄楼梯，两边是墙和低矮窗洞。",
        scores: { japMinimal: 1, neoChinese: 1, nordic: 1 },
      },
      {
        label: "D",
        text: "金属或混凝土直跑楼梯，旁边是巨大空旷空间。",
        scores: { industrial: 2 },
      },
    ],
  },

  // ========= 生活方式 & 想象场景（6 题）=========
  {
    id: 31,
    category: "生活方式 · 城市选择",
    title: "如果必须在以下四种城市中选一个长住，你会选？",
    options: [
      {
        label: "A",
        text: "高楼林立、功能分区清晰的大都市。",
        scores: { modernism: 2 },
      },
      {
        label: "B",
        text: "保留大量历史建筑、有广场和长街的古城。",
        scores: { classicism: 2, baroque: 1 },
      },
      {
        label: "C",
        text: "有胡同/巷子、老社区与新建筑混合的城市。",
        scores: { neoChinese: 2 },
      },
      {
        label: "D",
        text: "被海包围、建筑贴着山坡上涨的海边城市。",
        scores: { mediterranean: 2, nordic: 1 },
      },
    ],
  },
  {
    id: 32,
    category: "生活方式 · 独处",
    title: "你更愿意在哪种地方一个人静静待着？",
    options: [
      {
        label: "A",
        text: "安静的现代图书馆角落。",
        scores: { modernism: 2 },
      },
      {
        label: "B",
        text: "老教堂/殿堂的一隅或长椅。",
        scores: { classicism: 1, baroque: 2 },
      },
      {
        label: "C",
        text: "寺庙、茶室、日式庭院旁的小房间。",
        scores: { japMinimal: 1, neoChinese: 2 },
      },
      {
        label: "D",
        text: "海边/湖边的小屋，窗外是水和天。",
        scores: { mediterranean: 2, nordic: 1 },
      },
    ],
  },
  {
    id: 33,
    category: "生活方式 · 聚会",
    title: "如果你在家办小型聚会，你希望空间更像？",
    options: [
      {
        label: "A",
        text: "现代画廊/设计展厅，大家边看东西边聊天。",
        scores: { modernism: 2 },
      },
      {
        label: "B",
        text: "古典客厅或带餐厅的长桌空间。",
        scores: { classicism: 1, baroque: 2 },
      },
      {
        label: "C",
        text: "日式/中式庭院边的室内+室外混合空间。",
        scores: { neoChinese: 2, japMinimal: 1 },
      },
      {
        label: "D",
        text: "像小酒馆/仓库派对那样，有吧台和高桌。",
        scores: { industrial: 2 },
      },
    ],
  },
  {
    id: 34,
    category: "想象场景 · 空间人格",
    title: "如果把你当成一栋建筑，你更希望别人怎么形容你？",
    options: [
      {
        label: "A",
        text: "“很清醒、很克制，很好懂。”",
        scores: { modernism: 2 },
      },
      {
        label: "B",
        text: "“有点隆重、有点戏剧性，但让人忘不了。”",
        scores: { classicism: 1, baroque: 2 },
      },
      {
        label: "C",
        text: "“不张扬，但跟他/她待久了会很舒服。”",
        scores: { japMinimal: 1, nordic: 2, neoChinese: 1 },
      },
      {
        label: "D",
        text: "“有点酷、有点野，跟他/她在一起永远不无聊。”",
        scores: { industrial: 2 },
      },
    ],
  },
  {
    id: 35,
    category: "想象场景 · 窗外世界",
    title: "理想中的“窗外世界”，你更偏向？",
    options: [
      {
        label: "A",
        text: "城市天际线和车流组成的动态画面。",
        scores: { modernism: 2 },
      },
      {
        label: "B",
        text: "教堂屋顶、穹顶和钟楼构成的古城天际线。",
        scores: { classicism: 2, baroque: 1 },
      },
      {
        label: "C",
        text: "山、水、树和错落的屋顶。",
        scores: { neoChinese: 2, nordic: 1 },
      },
      {
        label: "D",
        text: "一整片海和一条蜿蜒的海岸线。",
        scores: { mediterranean: 2 },
      },
    ],
  },
  {
    id: 36,
    category: "想象场景 · 屋顶",
    title: "如果可以随时上屋顶，你更希望那是？",
    options: [
      {
        label: "A",
        text: "现代平屋顶，有跑道、花园和夜景。",
        scores: { modernism: 2 },
      },
      {
        label: "B",
        text: "传统坡屋顶，可以坐在屋脊上看日落。",
        scores: { neoChinese: 2, classicism: 1 },
      },
      {
        label: "C",
        text: "有木桌、植物和串灯的小天台。",
        scores: { nordic: 2, mediterranean: 1 },
      },
      {
        label: "D",
        text: "老厂房屋顶，看着城市和轨道交通穿梭。",
        scores: { industrial: 2 },
      },
    ],
  },
]

// 导出以便 app.js 使用（浏览器环境下就是全局常量）
window.QUESTIONS = QUESTIONS
