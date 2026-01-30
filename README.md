<!DOCTYPE html>
<html lang="ar" dir="rtl">
  <link rel="stylesheet" href="System.css">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>KPI System</title>
<style></style>
</head>

<body>
  <div class="img"></div>
  <div class="content"></div>
<header>نظام متابعة الأداء التفاعلي لقسم MEMD</header>

<!-- الصفحة 1: تسجيل الدخول -->
<section id="p1" class="active">
  <div class="card" style="max-width:400px;margin:50px auto;" id="loginBox">
    <h2>تسجيل الدخول</h2>
<input type="email" id="loginEmail" placeholder="البريد الإلكتروني" required>
   <div style="position:relative">
  <input type="password" id="loginPassword" class="pass-key" placeholder="كلمة المرور">
  <span class="show">show</span>
</div>
<button class="btn" type="button" onclick="login()">تسجيل الدخول</button>
    <p style="text-align:center;margin-top:15px">
<a href="javascript:void(0)" onclick="showRegister()">إنشاء حساب جديد</a>
    </p>
  </div>
  <div class="card" style="max-width:400px;margin:50px auto;display:none" id="registerBox">
    <h3>إنشاء حساب جديد</h3>
    <input type="text" id="fullName" placeholder="الاسم بالكامل">
    <input type="tel" id="phone" placeholder="رقم التليفون">
    <select id="job">
      <option value="">اختر الوظيفة</option>
      <option value="fanni">فني</option>
      <option value="leader">رئيس مجموعة</option>
    </select>
    <input type="text" id="empId" placeholder="كود ID">
    <input type="email" id="registerEmail" placeholder="البريد الإلكتروني">
    <input type="password" id="registerPassword" placeholder="كلمة المرور">
    <button class="btn" onclick="register()">إنشاء الحساب</button>
    <p style="text-align:center;margin-top:15px">
      <a href="#" onclick="showLogin()">رجوع لتسجيل الدخول</a>
    </p>
  </div>
  <p id="msg" style="text-align:center;margin-top:15px;color:#d00"></p>
</section>
<!-- الصفحة 2: النسبة الشهرية -->
<section id="p2">
  <nav>
  <a onclick="showPage('p2')">النسبة الشهرية</a>
  <a onclick="showPage('p3')">الإدخال اليومي</a>
  <a onclick="showPage('p4')">النسبة لكل الفنيين</a>
  <a onclick="showPage('p5')">ملاحظات</a>
  <a onclick="logout()" style="color:red;font-weight:bold;">تسجيل الخروج</a>
</nav>

  <div class="dashboard">
    <div class="dashboard-header">
      <div class="dashboard-title">📊 KPI Electricity team</div>
      <div class="months-selector" id="monthsSelector">
        <button class="month-btn active" onclick="selectMonth(this)">January</button>
        <button class="month-btn" onclick="selectMonth(this)">February</button>
        <button class="month-btn" onclick="selectMonth(this)">March</button>
        <button class="month-btn" onclick="selectMonth(this)">April</button>
        <button class="month-btn" onclick="selectMonth(this)">May</button>
        <button class="month-btn" onclick="selectMonth(this)">June</button>
        <button class="month-btn" onclick="selectMonth(this)">July</button>
        <button class="month-btn" onclick="selectMonth(this)">August</button>
        <button class="month-btn" onclick="selectMonth(this)">September</button>
        <button class="month-btn" onclick="selectMonth(this)">October</button>
        <button class="month-btn" onclick="selectMonth(this)">November</button>
        <button class="month-btn" onclick="selectMonth(this)">December</button>
      </div>
      <div class="rank-section">
        <div class="rank-title">🏆 Rank</div>
        <div id="rankList"></div>
      </div>
    </div>

    <div style="display:grid;grid-template-columns:200px 1fr;gap:20px;margin-top:20px">
      <div>
        <label style="color:#ffc107;font-weight:bold;display:block;margin-bottom:10px;font-size:14px">👥 اختر فني:</label>
        <div class="technician-list" id="technicianListContainer"></div>
        <button class="btn" onclick="clearTechnicianFilter()" style="width:100%;">🔄 مسح الفلتر</button>
      </div>

      <div>
        <div class="dashboard-stats">
          <div class="stat-card">
            <div class="stat-label">Voting</div>
            <div class="stat-value" id="votingValue">0</div>
          </div>
          <div class="stat-card">
            <div class="stat-label">Punish</div>
            <div class="stat-value" id="punishValue">0</div>
          </div>
          <div class="stat-card">
            <div class="stat-label">Good job</div>
            <div class="stat-value" id="bonusValue">0</div>
          </div>
        </div>

        <div class="dashboard-charts">
          <div class="chart-container">
            <div class="chart-title">🎯 Total reward</div>
            <canvas id="competitionChart"></canvas>
          </div>
          <div class="chart-container">
            <div class="chart-title">📈 Repeated</div>
            <canvas id="repeatedChart"></canvas>
          </div>
          <div class="chart-container" style="grid-column:1/-1">
            <div class="chart-title">⚡ Efficiency</div>
            <canvas id="efficiencyChart"></canvas>
          </div>
        </div>
      </div>
    </div>

    <div style="margin-top:40px;padding:20px;background:rgba(0,0,0,0.2);border-radius:10px">
      <div class="month-header">📅 ${currentMonth} - بيانات الفنيين</div>
      <div class="technician-cards" id="technicianCardsContainer"></div>
    </div>
  </div>
</section>

<!-- الصفحة 3: إدخال البيانات اليومية -->
<section id="p3">
 <nav>
  <a onclick="showPage('p2')">النسبة الشهرية</a>
  <a onclick="showPage('p3')">الإدخال اليومي</a>
  <a onclick="showPage('p4')">النسبة لكل الفنيين</a>
  <a onclick="showPage('p5')">ملاحظات</a>
  <a onclick="logout()" style="color:red;font-weight:bold;">تسجيل الخروج</a>
</nav>

  <div class="card form-section">
    <h3>إدخال الشغل اليومي</h3>
    <input type="date" id="d_date">
    <textarea id="d_work" placeholder="🔧 الأعمال اليومية" rows="4"></textarea>
    <textarea id="d_faults" placeholder="⚠️ الأعطال والمشاكل" rows="4"></textarea>
    <div class="card repair-box">
      <div class="card daily-check-box">
  <h3>✅ التشيك اليومي</h3>

  <label>المكان / المعدة</label>
  <input type="text" id="checkLocation" placeholder="اكتب المكان أو اسم المعدة...">

  <label>ملاحظات التشيك</label>
  <textarea id="checkNotes" placeholder="اكتب ملاحظات التشيك اليومي..."></textarea>

  <div class="images-row">
    <div>
      <label>📷 صورة قبل</label>
      <input type="file" id="checkBeforeImg" accept="image/*">
    </div>

    <div>
      <label>📷 صورة بعد</label>
      <input type="file" id="checkAfterImg" accept="image/*">
    </div>
  </div>

  <p id="dailyCheckMsg"></p>
</div>

  <h3>🛠️ إصلاح / عطل</h3>

  <label>وصف الإصلاح</label>
  <textarea id="repairText" placeholder="اكتب تفاصيل العطل والإصلاح الذي تم..."></textarea>

  <div class="images-row">
    <div>
      <label>📷 صورة قبل</label>
      <input type="file" id="repairBeforeImg" accept="image/*">
    </div>

    <div>
      <label>📷 صورة بعد</label>
      <input type="file" id="repairAfterImg" accept="image/*">
    </div>
  </div>


<div class="card suggestion-box">
  <h3>💡 اقتراح / تحسين</h3>

  <label>المشكلة</label>
  <textarea id="problem" placeholder="اكتب المشكلة هنا..."></textarea>

  <label>الحل</label>
  <textarea id="solution" placeholder="اكتب الحل المقترح..."></textarea>

  <label>النتيجة</label>
  <textarea id="result" placeholder="النتيجة بعد التنفيذ..."></textarea>

  <div class="images-row">
    <div>
      <label>📷 صورة قبل</label>
      <input type="file" id="beforeImg" accept="image/*">
    </div>

    <div>
      <label>📷 صورة بعد</label>
      <input type="file" id="afterImg" accept="image/*">
    </div>

</div>
    <input id="d_team" placeholder="👷‍♂️ المنفذين">
    <h4>📊 التقييم</h4>
    <label>Daily Check</label>
    <select id="v_check"><option>نعم</option><option>لا</option></select>
    <label>Repairs</label>
    <select id="v_repairs"><option>نعم</option><option>لا</option></select>
    <label>Safety</label>
    <select id="v_safety"><option>نعم</option><option>لا</option></select>
    <label>Reports</label>
    <select id="v_reports"><option>نعم</option><option>لا</option></select>
    <button class="btn" onclick="sendWhats()">📤 إرسال</button>

    <div id="workList"></div>
  </div>
</section>

<!-- الصفحة 4: النسبة لكل الفنيين -->
 
<section id="p4">
 <nav>
  <a onclick="showPage('p2')">النسبة الشهرية</a>
  <a onclick="showPage('p3')">الإدخال اليومي</a>
  <a onclick="showPage('p4')">النسبة لكل الفنيين</a>
  <a onclick="showPage('p5')">ملاحظات</a>
  <a onclick="logout()" style="color:red;font-weight:bold;">تسجيل الخروج</a>
</nav>

  <div class="card">
    <h3>النسبة لكل الفنيين</h3>
    <label style="display:block;margin-bottom:10px;font-weight:bold;">📤 تحميل ملف Excel:</label>
    <input type="file" id="excelFile" accept=".xlsx,.xls,.csv" onchange="loadExcelData(event)">
    <div style="margin:15px 0;padding:12px;background:#f0f0f0;border-left:3px solid #1e5ad7;border-radius:5px;font-size:13px;">
      📌 <strong>شروط الملف:</strong><br>
      • العمود الأول: <strong>Month</strong> (الشهر مثل: January, February)<br>
      • العمود الثاني: <strong>Name</strong> (اسم الفني)<br>
      • باقي الأعمدة: Repeated, Stopped, TPM, Reuse, Golden idea, Improvements, Good job, Jocker, Daily Check, Voting, Punish, Total
    </div>
    <div style="display:flex;gap:10px;margin-bottom:20px;">
      <button class="btn" onclick="exportToCSV()">📥 تحميل CSV</button>
      <button class="btn" onclick="exportToExcel()">📊 تحميل Excel</button>
    </div>
    <div style="overflow-x:auto;">
      <table id="technicianTable">
        <thead>
          <tr>
            <th>Name</th>
            <th>Repeated</th>
            <th>Stopped</th>
            <th>TPM</th>
            <th>Reuse</th>
            <th>Golden Idea</th>
            <th>Improvements</th>
            <th>Good Job</th>
            <th>Jocker</th>
            <th>Daily Check</th>
            <th>Voting</th>
            <th>Punish</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody id="allDataTableBody">
          <tr><td colspan="13" style="color:#999;padding:30px;text-align:center;">📂 برجاء تحميل ملف Excel</td></tr>
        </tbody>
      </table>
    </div>
  </div>
</section>

<!-- الصفحة 5: ملاحظات -->
<section id="p5">
 <nav>
  <a onclick="showPage('p2')">النسبة الشهرية</a>
  <a onclick="showPage('p3')">الإدخال اليومي</a>
  <a onclick="showPage('p4')">النسبة لكل الفنيين</a>
  <a onclick="showPage('p5')">ملاحظات</a>
  <a onclick="logout()" style="color:red;font-weight:bold;">تسجيل الخروج</a>
</nav>

  <div class="card">
    <h3>ملاحظات وتحليل</h3>
    <textarea rows="6" placeholder="اكتب ملاحظاتك..."></textarea>
    <button class="btn">حفظ</button>
  </div>
</section>


<
<script>
let monthlyData = [];
let currentMonth = 'January';
let selectedTechnician = '';

function saveDay(){
  const day = {
    date: document.getElementById('d_date').value,
    work: document.getElementById('d_work').value,
    faults: document.getElementById('d_faults').value,
    fixes: document.getElementById('d_fixes').value,
    notes: document.getElementById('d_notes').value,
    team: document.getElementById('d_team').value,
    check: document.getElementById('v_check').value,
    repairs: document.getElementById('v_repairs').value,
    safety: document.getElementById('v_safety').value,
    reports: document.getElementById('v_reports').value
  };
  let score = 0;
  if(day.check==='نعم') score+=20;
  if(day.repairs==='نعم') score+=30;
  if(day.safety==='نعم') score+=30;
  if(day.reports==='نعم') score+=20;
  day.score = score;

  let days = JSON.parse(localStorage.getItem('days')||'[]');
  days.push(day);
  localStorage.setItem('days',JSON.stringify(days));
  alert('تم حفظ اليوم');
  updateTotal();
  renderWorkList();
}

function sendWhats(){
  let date = document.getElementById('d_date').value;
  let work = document.getElementById('d_work').value;
  let faults = document.getElementById('d_faults').value;
  let fixes = document.getElementById('d_fixes').value;
  let notes = document.getElementById('d_notes').value;
  let team = document.getElementById('d_team').value;
  let message = `📅 تاريخ: ${date}\n\n🔧 الأعمال اليومية:\n${work}\n\n⚠️ الأعطال:\n${faults}\n\n🛠 الإصلاحات / الحلول:\n${fixes}\n\n💡 اقتراحات / ملاحظات:\n${notes}\n\n👷‍♂️ المنفذين: ${team}`;
  let url = `https://wa.me/?text=${encodeURIComponent(message)}`;
  window.open(url,'_blank');
}


function selectTechnician(name){
  selectedTechnician = selectedTechnician === name ? '' : name;
  updateTechnicianList();
  updateDashboard();
}

function clearTechnicianFilter(){
  selectedTechnician = '';
  updateTechnicianList();
  updateDashboard();
}

function updateTechnicianList(){
  const container = document.getElementById('technicianListContainer');
  if(!container) return;
  
  const data = monthlyData.filter(d => d.month === currentMonth);
  const technicians = [...new Set(data.map(d => d.name))].sort();
  
  container.innerHTML = '';
  technicians.forEach(name => {
    const item = document.createElement('div');
    item.className = `tech-list-item ${selectedTechnician === name ? 'active' : ''}`;
    item.textContent = name;
    item.onclick = () => selectTechnician(name);
    container.appendChild(item);
  });
}

function updateTable(){
  const data = monthlyData.filter(d => d.month === currentMonth);
  const tbody = document.querySelector('#technicianTable tbody');
  
  if(data.length === 0){
    tbody.innerHTML = `<tr><td colspan="13" style="color:#999;padding:30px;">لا توجد بيانات للشهر: ${currentMonth}</td></tr>`;
    return;
  }
  
  tbody.innerHTML = '';
  
  // إضافة فاصل بعنوان الشهر
  const headerRow = tbody.insertRow();
  headerRow.style.background = '#0277bd';
  headerRow.style.color = '#fff';
  headerRow.style.fontWeight = 'bold';
  headerRow.style.fontSize = '16px';
  headerRow.style.textAlign = 'center';
  headerRow.innerHTML = `<td colspan="13" style="padding: 15px; font-size: 18px;">📅 ${currentMonth}</td>`;
  
  data.forEach(item => {
    const row = tbody.insertRow();
    row.innerHTML = `<td>${item.name}</td><td>${item.repeated_faults}</td><td>${item.stopped}</td><td>${item.tpm_equipment}</td><td>${item.reuse}</td><td>${item.golden_idea}</td><td>${item.improvements}</td><td>${item.good_job}</td><td>${item.jocker}</td><td>${item.daily_check}</td><td>${item.voting}</td><td>${item.punish}</td><td><strong>${item.total}</strong></td>`;
  });
}

function updateAllMonthsTable(){
  const tbody = document.getElementById('allDataTableBody');
  if(!tbody) return;
  
  if(monthlyData.length === 0){
    tbody.innerHTML = `<tr><td colspan="13" style="color:#999;padding:30px;text-align:center;">📂 لم يتم تحميل بيانات</td></tr>`;
    return;
  }
  
  tbody.innerHTML = '';
  
  // الحصول على الأشهر المتاحة بالترتيب
  const months = [...new Set(monthlyData.map(d => d.month))];
  const monthOrder = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  const sortedMonths = months.sort((a,b) => monthOrder.indexOf(a) - monthOrder.indexOf(b));
  
  sortedMonths.forEach((month, monthIdx) => {
    const monthData = monthlyData.filter(d => d.month === month);
    
    // إضافة صف اسم الشهر
    const monthHeaderRow = tbody.insertRow();
    monthHeaderRow.style.background = '#1e5ad7';
    monthHeaderRow.style.color = '#fff';
    monthHeaderRow.style.fontWeight = 'bold';
    monthHeaderRow.style.textAlign = 'center';
    monthHeaderRow.innerHTML = `<td colspan="13" style="padding: 12px; font-size: 18px; font-weight: bold;">${month}</td>`;
    
    // إضافة صف الرؤوس لكل شهر
    const headersRow = tbody.insertRow();
    headersRow.style.background = '#0277bd';
    headersRow.style.color = '#fff';
    headersRow.style.fontWeight = 'bold';
    headersRow.style.fontSize = '12px';
    headersRow.innerHTML = `
      <td style="padding: 8px;">Name</td>
      <td style="padding: 8px;">Repeated<br/>faults Less<br/>than3time<br/>of month<br/>10%</td>
      <td style="padding: 8px;">Stopped<br/>Less than<br/>40 MIN<br/>10%</td>
      <td style="padding: 8px;">TPM<br/>Equipment<br/>10%</td>
      <td style="padding: 8px;">Reuse<br/>15%</td>
      <td style="padding: 8px;">Golden<br/>idea<br/>15%</td>
      <td style="padding: 8px;">Improvements<br/>10%</td>
      <td style="padding: 8px;">Good job<br/>10%</td>
      <td style="padding: 8px;">Jocker<br/>5%</td>
      <td style="padding: 8px;">Daily<br/>Check<br/>5%</td>
      <td style="padding: 8px;">Voting<br/>10%</td>
      <td style="padding: 8px;">Punish<br/>10%</td>
      <td style="padding: 8px;">Total<br/>reward<br/>100%</td>
    `;
    
    // إضافة بيانات الفنيين لهذا الشهر
    monthData.forEach((item, idx) => {
      const row = tbody.insertRow();
      row.style.background = idx % 2 === 0 ? '#f5f5f5' : '#fff';
      row.style.textAlign = 'center';
      row.style.fontSize = '12px';
      row.innerHTML = `
        <td style="text-align:right;padding:8px;font-weight:500;">${item.name}</td>
        <td style="padding:8px;">${item.repeated_faults}</td>
        <td style="padding:8px;">${item.stopped}</td>
        <td style="padding:8px;">${item.tpm_equipment}</td>
        <td style="padding:8px;">${item.reuse}</td>
        <td style="padding:8px;">${item.golden_idea}</td>
        <td style="padding:8px;">${item.improvements}</td>
        <td style="padding:8px;">${item.good_job}</td>
        <td style="padding:8px;">${item.jocker}</td>
        <td style="padding:8px;">${item.daily_check}</td>
        <td style="padding:8px;">${item.voting}</td>
        <td style="padding:8px;">${item.punish}</td>
        <td style="padding:8px;font-weight:bold;color:#1e5ad7;">${item.total}</td>
      `;
    });
    
    // إضافة صف فاصل بين الأشهر
    if(monthIdx < sortedMonths.length - 1){
      const separatorRow = tbody.insertRow();
      separatorRow.style.height = '20px';
      separatorRow.style.background = '#e3f2fd';
      separatorRow.innerHTML = `<td colspan="13"></td>`;
    }
  });
}

function updateDashboard(){
  let data = monthlyData.filter(d => d.month === currentMonth);
  
  // تطبيق الفلتر إذا كان هناك فني مختار
  if(selectedTechnician){
    data = data.filter(d => d.name === selectedTechnician);
  }
  
  const voting = data.reduce((a,b) => a + b.voting, 0);
  const punish = data.reduce((a,b) => a + b.punish, 0);
  const bonus = data.reduce((a,b) => a + b.good_job, 0);
  
  document.getElementById('votingValue').textContent = voting;
  document.getElementById('punishValue').textContent = punish;
  document.getElementById('bonusValue').textContent = bonus;

  updateRank(data);
  updateCharts(data);
  updateTechnicianCards(data);
}

function updateTechnicianCards(data){
  const container = document.getElementById('technicianCardsContainer');
  if(!container) return;
  
  container.innerHTML = '';
  
  // ترتيب حسب الدرجة الكلية
  const sorted = [...data].sort((a,b) => b.total - a.total);
  
  sorted.forEach((item, idx) => {
    const card = document.createElement('div');
    card.className = 'tech-card';
    card.innerHTML = `
      <div class="tech-name">${idx+1}. ${item.name}</div>
      <div class="tech-detail"><span class="tech-detail-label">الدرجة الكلية:</span><span class="tech-detail-value">${item.total}</span></div>
      <div class="tech-detail"><span class="tech-detail-label">الأخطاء المتكررة:</span><span class="tech-detail-value">${item.repeated_faults}</span></div>
      <div class="tech-detail"><span class="tech-detail-label">الإيقاف:</span><span class="tech-detail-value">${item.stopped}</span></div>
      <div class="tech-detail"><span class="tech-detail-label">TPM:</span><span class="tech-detail-value">${item.tpm_equipment}</span></div>
      <div class="tech-detail"><span class="tech-detail-label">إعادة استخدام:</span><span class="tech-detail-value">${item.reuse}</span></div>
      <div class="tech-detail"><span class="tech-detail-label">الفكرة الذهبية:</span><span class="tech-detail-value">${item.golden_idea}</span></div>
      <div class="tech-detail"><span class="tech-detail-label">التحسينات:</span><span class="tech-detail-value">${item.improvements}</span></div>
      <div class="tech-detail"><span class="tech-detail-label">عمل جيد:</span><span class="tech-detail-value">${item.good_job}</span></div>
      <div class="tech-detail"><span class="tech-detail-label">الجوكر:</span><span class="tech-detail-value">${item.jocker}</span></div>
      <div class="tech-detail"><span class="tech-detail-label">الفحص اليومي:</span><span class="tech-detail-value">${item.daily_check}</span></div>
      <div class="tech-detail"><span class="tech-detail-label">التصويت:</span><span class="tech-detail-value">${item.voting}</span></div>
      <div class="tech-detail"><span class="tech-detail-label">العقوبة:</span><span class="tech-detail-value">${item.punish}</span></div>
    `;
    container.appendChild(card);
  });
}

function updateRank(data){
  const sorted = [...data].sort((a,b) => b.total - a.total);
  const rankList = document.getElementById('rankList');
  rankList.innerHTML = '';
  
  if(sorted.length === 0) return;
  
  sorted.slice(0, 5).forEach((item, idx) => {
    const medals = ['🥇', '🥈', '🥉', '4️⃣', '5️⃣'];
    const div = document.createElement('div');
    div.className = 'rank-item';
    div.innerHTML = `${medals[idx]} ${item.name.split(' ')[0]}: <strong>${item.total}</strong>`;
    rankList.appendChild(div);
  });
}

function updateCharts(data){
  if(data.length === 0) return;

  const compCtx = document.getElementById('competitionChart')?.getContext('2d');
  if(compCtx){
    if(window.compChart) window.compChart.destroy();
    const top3 = [...data].sort((a,b) => b.total - a.total).slice(0, 3);
    window.compChart = new Chart(compCtx, {
      type: 'doughnut',
      data: {
        labels: top3.map(d => `${d.name}\n${d.total}`),
        datasets: [{
          data: top3.map(d => d.total), 
          backgroundColor: ['#FFD700', '#C0C0C0', '#CD7F32'],
          borderColor: '#fff',
          borderWidth: 3
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            labels: {color: '#fff', font: {size: 12, weight: 'bold'}, padding: 15}
          },
          tooltip: {
            callbacks: {
              label: function(context) {
                return context.label + ': ' + context.parsed + ' نقطة';
              }
            },
            backgroundColor: 'rgba(0,0,0,0.8)',
            titleColor: '#ffc107',
            bodyColor: '#fff',
            padding: 12,
            titleFont: {size: 13, weight: 'bold'}
          }
        }
      }
    });
  }

  const repCtx = document.getElementById('repeatedChart')?.getContext('2d');
  if(repCtx){
    if(window.repChart) window.repChart.destroy();
    const sorted = [...data].sort((a,b) => b.repeated_faults - a.repeated_faults).slice(0, 8);
    window.repChart = new Chart(repCtx, {
      type: 'line',
      data: {
        labels: sorted.map(d => d.name.substring(0, 10)),
        datasets: [{
          label: 'الأخطاء المتكررة',
          data: sorted.map(d => d.repeated_faults),
          borderColor: '#ffc107',
          backgroundColor: 'rgba(255,193,7,0.1)',
          fill: true,
          tension: 0.4,
          borderWidth: 3,
          pointBackgroundColor: '#ffc107',
          pointBorderColor: '#fff',
          pointBorderWidth: 2,
          pointRadius: 6,
          pointHoverRadius: 8
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {labels: {color: '#fff', font: {size: 12, weight: 'bold'}}},
          tooltip: {
            backgroundColor: 'rgba(0,0,0,0.8)',
            titleColor: '#ffc107',
            bodyColor: '#fff',
            padding: 12,
            callbacks: {
              label: function(context) {
                return context.dataset.label + ': ' + context.parsed.y;
              }
            }
          }
        },
        scales: {
          y: {
            ticks: {color: '#fff', font: {size: 11}},
            grid: {color: 'rgba(255,255,255,0.1)'}
          },
          x: {
            ticks: {color: '#fff', font: {size: 11}},
            grid: {color: 'rgba(255,255,255,0.1)'}
          }
        }
      }
    });
  }

  const effCtx = document.getElementById('efficiencyChart')?.getContext('2d');
  if(effCtx){
    if(window.effChart) window.effChart.destroy();
    const sorted = [...data].sort((a,b) => b.total - a.total);
    window.effChart = new Chart(effCtx, {
      type: 'bar',
      data: {
        labels: sorted.map(d => d.name.substring(0, 12)),
        datasets: [{
          label: 'الدرجة الكلية',
          data: sorted.map(d => d.total),
          backgroundColor: sorted.map((_, i) => {
            const colors = ['#4fc3f7', '#29b6f6', '#0288d1', '#0277bd', '#01579b'];
            return colors[i % colors.length];
          }),
          borderColor: '#fff',
          borderWidth: 2
        }]
      },
      options: {
        indexAxis: 'x',
        responsive: true,
        plugins: {
          legend: {labels: {color: '#fff', font: {size: 12, weight: 'bold'}}},
          tooltip: {
            backgroundColor: 'rgba(0,0,0,0.8)',
            titleColor: '#ffc107',
            bodyColor: '#fff',
            padding: 12,
            callbacks: {
              label: function(context) {
                return 'الدرجة: ' + context.parsed.x;
              }
            }
          }
        },
        scales: {
          y: {
            ticks: {color: '#fff', font: {size: 11}},
            grid: {color: 'rgba(255,255,255,0.1)'}
          },
          x: {
            ticks: {color: '#fff', font: {size: 11}},
            grid: {color: 'rgba(255,255,255,0.1)'}
          }
        }
      }
    });
  }
}

function selectMonth(btn){
  currentMonth = btn.textContent;
  selectedTechnician = '';
  document.querySelectorAll('.month-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  
  // تحديث عنوان الفنيين
  const monthHeader = document.querySelector('.month-header');
  if(monthHeader) {
    monthHeader.innerHTML = `📅 ${currentMonth} - بيانات الفنيين`;
  }
  
  updateTechnicianList();
  updateTable();
  updateDashboard();
}
function loadExcelData(event){
  const file = event.target.files[0];
  if(!file) return;

  const reader = new FileReader();

  reader.onload = function(e){
    try{
      const text = e.target.result;
      const lines = text.split('\n').map(l => l.trim()).filter(l => l);

      if(lines.length === 0){
        alert('❌ الملف فارغ');
        return;
      }

      monthlyData = [];
      let currentMonth = '';
      const monthsList = ['January','February','March','April','May','June','July','August','September','October','November','December'];

      for(let i = 0; i < lines.length; i++){
        const cols = lines[i].split(',').map(c => c.trim());

        // سطر شهر
        if(cols[0] && monthsList.includes(cols[0]) && !cols[1]){
          currentMonth = cols[0];
          continue;
        }

        // تخطي الرؤوس
        if(!cols[1] || cols[1].includes('Name') || cols[1].includes('Repeated')) continue;
        if(cols.length < 14) continue;

        monthlyData.push({
          month: currentMonth || 'January',
          name: cols[1],
          repeated_faults: +cols[2] || 0,
          stopped: +cols[3] || 0,
          tpm_equipment: +cols[4] || 0,
          reuse: +cols[5] || 0,
          golden_idea: +cols[6] || 0,
          improvements: +cols[7] || 0,
          good_job: +cols[8] || 0,
          jocker: +cols[9] || 0,
          daily_check: +cols[10] || 0,
          voting: +cols[11] || 0,
          punish: +cols[12] || 0,
          total: +cols[13] || 0
        });
      }

      if(monthlyData.length === 0){
        alert('❌ لم يتم العثور على بيانات صحيحة');
        return;
      }

      const loadedMonths = [...new Set(monthlyData.map(d => d.month))];
      currentMonth = loadedMonths[0];

      updateMonthButtons(loadedMonths);
      updateTechnicianList();
      updateTable();
      updateDashboard();
      updateAllMonthsTable();

      alert(`✅ تم تحميل ${monthlyData.length} سجل من ${loadedMonths.length} شهر`);

    }catch(err){
      console.error(err);
      alert('❌ خطأ في قراءة الملف');
    }
  };

  reader.onerror = function(){
    alert('❌ فشل قراءة الملف');
  };

  reader.readAsText(file, 'UTF-8');
}

function updateMonthButtons(months){
  const selector = document.getElementById('monthsSelector');
  const monthOrder = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  const sorted = months.sort((a,b) => monthOrder.indexOf(a) - monthOrder.indexOf(b));
  
  selector.innerHTML = '';
  sorted.forEach(month => {
    const btn = document.createElement('button');
    btn.className = 'month-btn' + (month === currentMonth ? ' active' : '');
    btn.textContent = month;
    btn.onclick = () => selectMonth(btn);
    selector.appendChild(btn);
  });
}

function exportToCSV(){
  if(monthlyData.length === 0){
    alert('❌ لا توجد بيانات للتصدير');
    return;
  }
  let csv = 'Month,Name,Repeated,Stopped,TPM,Reuse,Golden Idea,Improvements,Good Job,Jocker,Daily Check,Voting,Punish,Total\n';
  monthlyData.forEach(item => {
    csv += `${item.month},"${item.name}",${item.repeated_faults},${item.stopped},${item.tpm_equipment},${item.reuse},${item.golden_idea},${item.improvements},${item.good_job},${item.jocker},${item.daily_check},${item.voting},${item.punish},${item.total}\n`;
  });
  const blob = new Blob([csv], {type:'text/csv'});
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = 'KPI_Data.csv';
  link.click();
}

function exportToExcel(){
  if(monthlyData.length === 0){
    alert('❌ لا توجد بيانات للتصدير');
    return;
  }
  const ws_data = [['Month','Name','Repeated','Stopped','TPM','Reuse','Golden Idea','Improvements','Good Job','Jocker','Daily Check','Voting','Punish','Total']];
  monthlyData.forEach(item => {
    ws_data.push([item.month,item.name,item.repeated_faults,item.stopped,item.tpm_equipment,item.reuse,item.golden_idea,item.improvements,item.good_job,item.jocker,item.daily_check,item.voting,item.punish,item.total]);
  });
  const ws = XLSX.utils.aoa_to_sheet(ws_data);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "KPI");
  XLSX.writeFile(wb, "KPI_Data.xlsx");
}

function showPage(id){
  document.querySelectorAll('section').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}
</script> 
<!-- Firebase -->
<script src="https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/8.10.0/firebase-auth.js"></script>
<script src="https://www.gstatic.com/firebasejs/8.10.0/firebase-database.js"></script>

<script src="sestem.js"></script>
</body>
</html>
