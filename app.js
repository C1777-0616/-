;(function () {
  const bgEl = document.getElementById("background-slideshow")
  const questionSection = document.getElementById("question-section")
  const progressLabel = document.getElementById("progress-label")
  const progressInner = document.getElementById("progress-inner")
  const prevBtn = document.getElementById("prev-btn")
  const nextBtn = document.getElementById("next-btn")

  const TOTAL = window.QUESTIONS.length
  let currentIndex = 0
  // 保存每题选择的选项 label，如 {0: "A", 1: "C", ...}
  const answers = {}

  // 你可以在这里替换为自己的图片链接（本地或网络）
  const backgroundImages = [
    // 建议替换成你自己的建筑摄影图
    "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg",
    "https://images.pexels.com/photos/374870/pexels-photo-374870.jpeg",
    "https://images.pexels.com/photos/220769/pexels-photo-220769.jpeg",
    "https://images.pexels.com/photos/3408353/pexels-photo-3408353.jpeg",
  ]
  let bgIndex = 0

  function initBackgroundSlideshow() {
    if (!bgEl || backgroundImages.length === 0) return
    bgEl.style.backgroundImage = `url(${backgroundImages[bgIndex]})`
    setInterval(() => {
      bgIndex = (bgIndex + 1) % backgroundImages.length
      bgEl.style.backgroundImage = `url(${backgroundImages[bgIndex]})`
    }, 8000)
  }

  function updateProgress() {
    const step = currentIndex + 1
    const percent = Math.round((step / TOTAL) * 100)
    if (progressLabel) {
      progressLabel.innerHTML = `
        <span>第 ${step} / ${TOTAL} 题</span>
        <span class="tag-soft">建筑人格探索中</span>
      `
    }
    if (progressInner) {
      progressInner.style.width = percent + "%"
    }
  }

  function renderQuestion() {
    const isEnd = currentIndex >= TOTAL
    if (isEnd) {
      renderResult()
      return
    }

    const q = window.QUESTIONS[currentIndex]
    if (!q) return

    updateProgress()

    // 渲染题目
    const selectedLabel = answers[currentIndex]
    const optionsHtml = q.options
      .map((opt) => {
        const selectedClass = selectedLabel === opt.label ? "selected" : ""
        return `
          <button class="option ${selectedClass}" data-label="${opt.label}">
            <span class="option-label">${opt.label}</span>
            <span class="option-text">${opt.text}</span>
          </button>
        `
      })
      .join("")

    questionSection.innerHTML = `
      <div class="question-index">${q.category || "场景题"}</div>
      <h2 class="question-title">${q.title}</h2>
      <div class="options">
        ${optionsHtml}
      </div>
      <div class="question-hint">请凭第一直觉选择，你的答案没有对错。</div>
    `

    // 绑定选项点击事件
    questionSection.querySelectorAll(".option").forEach((btn) => {
      btn.addEventListener("click", () => {
        const label = btn.getAttribute("data-label")
        answers[currentIndex] = label
        renderQuestion() // 重新渲染以更新选中样式
      })
    })

    // 更新按钮状态
    prevBtn.disabled = currentIndex === 0
    nextBtn.textContent = currentIndex === TOTAL - 1 ? "查看结果" : "下一题"
  }

  function calculateScores() {
    const totals = {
      modernism: 0,
      classicism: 0,
      baroque: 0,
      japMinimal: 0,
      nordic: 0,
      industrial: 0,
      neoChinese: 0,
      mediterranean: 0,
    }

    window.QUESTIONS.forEach((q, index) => {
      const label = answers[index]
      if (!label) return
      const opt = q.options.find((o) => o.label === label)
      if (!opt || !opt.scores) return
      Object.entries(opt.scores).forEach(([style, inc]) => {
        if (totals[style] != null) {
          totals[style] += inc
        }
      })
    })

    return totals
  }

  function deriveResultNarrative(totals) {
    const entries = Object.entries(totals)
    entries.sort((a, b) => b[1] - a[1])
    const top = entries[0]
    const second = entries[1]

    const styleMap = {
      modernism: "理性线条控 · 现代主义",
      classicism: "仪式感玩家 · 古典主义",
      baroque: "戏剧主角感 · 巴洛克",
      japMinimal: "心流治愈系 · 日式极简",
      nordic: "柔光生活家 · 北欧风",
      industrial: "夜色城市派 · 工业风",
      neoChinese: "山水留白派 · 新中式",
      mediterranean: "海风度假魂 · 地中海",
    }

    const styleDesc = {
      modernism:
        "你偏爱干净克制的线条和高效布局，相信“少即是多”，享受一切井井有条、逻辑清晰的空间。",
      classicism:
        "你在对称、比例和细节里找到安全感，喜欢有台阶、有柱廊、有仪式感的空间，仿佛每一天都在走红毯。",
      baroque:
        "你不介意一点“夸张”和戏剧性，反而享受被雕花、曲线和金色细节包围的时刻，人生就该自带舞台灯光。",
      japMinimal:
        "你渴望的是安静、留白和可呼吸的角落，喜欢木质、榻榻米、纸门和光影在地板上慢慢移动的感觉。",
      nordic:
        "你向往松弛、柔光和人间烟火，喜欢木色+奶白+柔软织物的组合，让家永远像周末早晨。",
      industrial:
        "你欣赏粗粝真实的材料，偏爱水泥、钢梁、外露管线和城市夜景，空间要有一点“不太乖”的叛逆气质。",
      neoChinese:
        "你被木格栅、灰瓦、山水意向和一丝留白打动，喜欢传统美学被重新翻译进当代生活的那种克制华丽。",
      mediterranean:
        "你天生带一点“度假脑”，钟爱白墙、拱门、蓝色窗框和慵懒的石阶，生活最好永远像在海边小镇散步。",
    }

    const mainKey = top[0]
    const secondKey = second && second[1] > 0 ? second[0] : null

    let title = styleMap[mainKey] || "建筑游走者"
    let tagline = ""

    if (secondKey && top[1] - second[1] <= 2) {
      title = `${styleMap[mainKey]} × ${styleMap[secondKey]}`
      tagline = "你是混血型建筑人格，在两种气质之间自由切换。"
    } else {
      tagline = "你的偏好相对清晰，这一类建筑往往一眼就能抓住你。"
    }

    return {
      title,
      tagline,
      mainKey,
      secondKey,
      styleMap,
      styleDesc,
      sorted: entries,
    }
  }

  function renderResult() {
    const totals = calculateScores()
    const allZero = Object.values(totals).every((v) => v === 0)

    if (allZero) {
      questionSection.innerHTML = `
        <div class="result">
          <h2 class="result-title">还差一点点信息</h2>
          <p class="result-tagline">你跳过/未答的大于已答，暂时读不出你的建筑人格。</p>
          <p class="tiny">可以点击左下角“上一题”回去多答几题，再来看看结果。</p>
        </div>
      `
      prevBtn.disabled = false
      nextBtn.disabled = true
      return
    }

    const info = deriveResultNarrative(totals)

    const barsHtml = info.sorted
      .filter(([_, v]) => v > 0)
      .map(([key, value]) => {
        const percentBase =
          info.sorted[0][1] === 0 ? 0 : (value / info.sorted[0][1]) * 100
        const percent = Math.max(8, percentBase) // 让小分也能看见一点条
        const label = info.styleMap[key]
        return `
          <div class="style-score-row">
            <span class="label">${label}</span>
            <div class="bar-wrap">
              <div class="bar-inner" style="width:${percent}%;"></div>
            </div>
            <span class="value">${value}</span>
          </div>
        `
      })
      .join("")

    questionSection.innerHTML = `
      <div class="result">
        <h2 class="result-title">你的建筑人格：${info.title}</h2>
        <p class="result-tagline">${info.tagline}</p>

        <div class="result-section">
          <div class="result-section-title">主调气质</div>
          <p>${info.styleDesc[info.mainKey] || ""}</p>
        </div>

        ${
          info.secondKey
            ? `
          <div class="result-section">
            <div class="result-section-title">隐藏副人格</div>
            <p>${info.styleDesc[info.secondKey] || ""}</p>
          </div>
        `
            : ""
        }

        <div class="result-section">
          <div class="result-section-title">风格雷达（当前答题样本）</div>
          <div class="style-score-bar">
            ${barsHtml}
          </div>
          <p class="tiny">提示：这是基于你目前作答题目的粗略画像，题目越多越完整。</p>
        </div>
      </div>
    `

    // 结果页按钮状态
    prevBtn.disabled = false
    nextBtn.disabled = false
    nextBtn.textContent = "重新开始"
  }

  function handlePrev() {
    if (currentIndex === 0) return
    if (currentIndex >= window.QUESTIONS.length) {
      // 从结果页返回上一题
      currentIndex = window.QUESTIONS.length - 1
    } else {
      currentIndex -= 1
    }
    renderQuestion()
  }

  function handleNext() {
    // 如果在结果页：重置为第一题
    if (currentIndex >= window.QUESTIONS.length) {
      currentIndex = 0
      for (const k in answers) delete answers[k]
      renderQuestion()
      return
    }

    // 允许跳过未答，但你也可以在这里强制要求必须选择
    currentIndex += 1
    if (currentIndex >= TOTAL) {
      renderResult()
    } else {
      renderQuestion()
    }
  }

  function init() {
    initBackgroundSlideshow()
    prevBtn.addEventListener("click", handlePrev)
    nextBtn.addEventListener("click", handleNext)
    renderQuestion()
  }

  document.readyState === "loading"
    ? document.addEventListener("DOMContentLoaded", init)
    : init()
})()

