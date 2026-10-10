/* ==========================================
   CSS STYLING - AD/ART GBRAN
   Tema: Nasionalis, Profesional & Modern
   ========================================== */

:root {
  --primary-red: #8B0000;
  --dark-red: #5C0000;
  --accent-gold: #D4AF37;
  --light-gold: #F3E5AB;
  --bg-color: #F8F9FA;
  --text-main: #333333;
  --text-light: #666666;
  --white: #FFFFFF;
  --shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  --transition: all 0.3s ease;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: var(--bg-color);
  color: var(--text-main);
  line-height: 1.6;
}

/* Header & Hero Section */
header {
  background: linear-gradient(135deg, var(--dark-red), var(--primary-red));
  color: var(--white);
  text-align: center;
  padding: 3rem 1rem;
  border-bottom: 5px solid var(--accent-gold);
}

header h1 {
  font-size: 2.2rem;
  margin-bottom: 0.5rem;
  letter-spacing: 1px;
}

header p {
  font-size: 1.1rem;
  color: var(--light-gold);
}

/* Container Utama */
.container {
  max-width: 1000px;
  margin: 2rem auto;
  padding: 0 1.5rem;
}

/* Navigasi / Filter Dokumen */
.nav-tabs {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
}

.tab-btn {
  background-color: var(--white);
  border: 2px solid var(--primary-red);
  color: var(--primary-red);
  padding: 0.6rem 1.5rem;
  font-weight: bold;
  border-radius: 30px;
  cursor: pointer;
  transition: var(--transition);
}

.tab-btn.active, .tab-btn:hover {
  background-color: var(--primary-red);
  color: var(--white);
  box-shadow: var(--shadow);
}

/* Card Section */
.card {
  background-color: var(--white);
  border-radius: 8px;
  padding: 2rem;
  margin-bottom: 1.5rem;
  box-shadow: var(--shadow);
  border-left: 5px solid var(--accent-gold);
}

.card h2 {
  color: var(--dark-red);
  margin-bottom: 1rem;
  font-size: 1.5rem;
  border-bottom: 2px solid var(--bg-color);
  padding-bottom: 0.5rem;
}

.card ul {
  list-style-type: none;
  padding-left: 0;
}

.card ul li {
  padding: 0.5rem 0;
  border-bottom: 1px solid #eee;
}

.card ul li:last-child {
  border-bottom: none;
}

/* Tombol Unduh / Aksi */
.btn-action {
  display: inline-block;
  background-color: var(--accent-gold);
  color: var(--dark-red);
  padding: 0.8rem 1.5rem;
  font-weight: bold;
  text-decoration: none;
  border-radius: 5px;
  margin-top: 1rem;
  transition: var(--transition);
  box-shadow: var(--shadow);
}

.btn-action:hover {
  background-color: #c19b2e;
  color: var(--white);
  transform: translateY(-2px);
}

/* Footer */
footer {
  text-align: center;
  padding: 1.5rem;
  background-color: var(--dark-red);
  color: var(--white);
  margin-top: 3rem;
  font-size: 0.9rem;
}

/* Responsive Design */
@media (max-width: 768px) {
  header h1 {
    font-size: 1.8rem;
  }
  .nav-tabs {
    flex-direction: column;
    align-items: center;
  }
  .tab-btn {
    width: 100%;
    max-width: 300px;
  }
}
