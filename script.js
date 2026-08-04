document.addEventListener('DOMContentLoaded', () => {
    // --- 1. THEME ENGINE ---
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeIcon = themeToggleBtn ? themeToggleBtn.querySelector('i') : null;
    const htmlEl = document.documentElement;

    function syncThemeUI() {
        const isLight = htmlEl.classList.contains('light-theme');
        if (themeIcon) {
            themeIcon.className = isLight ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
        }
    }

    syncThemeUI();

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            if (htmlEl.classList.contains('light-theme')) {
                htmlEl.classList.remove('light-theme');
                htmlEl.classList.add('dark-theme');
                localStorage.setItem('travel_theme', 'dark');
            } else {
                htmlEl.classList.remove('dark-theme');
                htmlEl.classList.add('light-theme');
                localStorage.setItem('travel_theme', 'light');
            }
            syncThemeUI();
        });
    }

    // --- 2. PERSONALIZED INVITATION URL PARSER (?with=Name) ---
    const urlParams = new URLSearchParams(window.location.search);
    const friendName = urlParams.get('with');
    const personalizedBanner = document.getElementById('personalized-banner');
    const personalizedText = document.getElementById('personalized-text');

    if (friendName && personalizedBanner && personalizedText) {
        personalizedText.textContent = `Đi Đà Lạt 3N2Đ cùng Trần Trọng Phú nhé ${friendName}! 🌲☁️`;
        personalizedBanner.style.display = 'block';
    }

    // --- 3. VIRAL TOOLS: GENERATE SHARE LINK & COPY CAPTION ---
    const friendInput = document.getElementById('friend-name-input');
    const btnGenerateLink = document.getElementById('btn-generate-link');
    const btnCopyCaption = document.getElementById('btn-copy-caption');
    const toast = document.getElementById('toast');

    function showToast(message) {
        if (!toast) return;
        toast.textContent = message;
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 3500);
    }

    if (btnGenerateLink && friendInput) {
        btnGenerateLink.addEventListener('click', () => {
            const nameVal = friendInput.value.trim();
            if (!nameVal) {
                showToast('Vui lòng nhập tên bạn bè/người yêu trước khi tạo link!');
                friendInput.focus();
                return;
            }

            const currentBase = window.location.origin + window.location.pathname;
            const customLink = `${currentBase}?with=${encodeURIComponent(nameVal)}`;

            navigator.clipboard.writeText(customLink)
                .then(() => {
                    showToast(`✅ Đã copy Link rủ ${nameVal} đi Đà Lạt: ${customLink}`);
                })
                .catch(() => {
                    showToast(`Link cá nhân hóa: ${customLink}`);
                });
        });
    }

    if (btnCopyCaption) {
        btnCopyCaption.addEventListener('click', () => {
            const reviewCaption = `🌲 CHUYẾN ĐI ĐÀ LẠT 3N2Đ TRỌN GÓI CHỈ 2.73TR/NGƯỜI ☁️\n\n📍 Lịch trình chi tiết theo giờ:\n• Ngày 1: Thung Lũng Hồng ➔ Mì bò hầm Yên ➔ BBQ hoàng hôn Xóm Lèo ➔ Chợ đêm.\n• Ngày 2: Săn mây Đồi chè Cầu Đất 4:00 sáng ➔ Vườn hoa Euro Garden ➔ Bún bò O Cúc ➔ Chênh Vênh Coffee.\n• Ngày 3: Bánh ướt lòng gà Long ➔ Langfarm mua quà ➔ Miền Du Mục Cafe ➔ Về Bình Dương.\n\n💰 Tổng chi phí: 2.730.000 đ/người (Khách sạn An Mai Boutique + Xe giường nằm khứ hồi + Ăn uống & Vé).\n\n🔗 Xem chi tiết lịch trình & sơ đồ chỉ đường Google Maps tại: https://dalat.tranphu.cyou`;

            navigator.clipboard.writeText(reviewCaption)
                .then(() => {
                    showToast('✅ Đã sao chép toàn bộ Caption Review! Bạn có thể dán đăng bài Facebook / TikTok ngay.');
                })
                .catch(() => {
                    showToast('Không thể sao chép tự động!');
                });
        });
    }

    // --- 4. DESTINATION NAV TABS RENDERER ---
    const destNavContainer = document.getElementById('destination-nav');
    if (destNavContainer && travelData.destinations) {
        destNavContainer.innerHTML = '';
        travelData.destinations.forEach(dest => {
            const btn = document.createElement('button');
            btn.className = `nav-dest-btn ${dest.active ? 'active' : ''} ${dest.comingSoon ? 'coming-soon' : ''}`;
            btn.innerHTML = `<i class="fa-solid fa-location-dot"></i> ${dest.name} ${dest.comingSoon ? '<small>(Sắp ra mắt)</small>' : ''}`;
            
            if (dest.comingSoon) {
                btn.addEventListener('click', () => {
                    showToast(`Hành trình ${dest.name} (${dest.subTitle}) sắp được ra mắt trong thời gian tới!`);
                });
            }
            destNavContainer.appendChild(btn);
        });
    }

    // --- 5. DAY TIMELINE RENDERER ---
    const timelineContainer = document.getElementById('timeline-render-container');
    const dayTabBtns = document.querySelectorAll('.day-tab-btn');
    const dalatData = travelData.dalat;

    function renderDayTimeline(dayNumber) {
        if (!timelineContainer || !dalatData) return;

        if (dayNumber === 'maps') {
            // Render Route Maps View
            let html = `<div class="maps-view-wrapper">`;
            dalatData.maps.forEach(map => {
                html += `
                    <div class="map-card-item glass-card">
                        <h3><i class="fa-solid fa-map-location"></i> ${map.title}</h3>
                        <div class="map-image-wrapper">
                            <img src="${map.image}" alt="${map.title}" loading="lazy">
                        </div>
                    </div>
                `;
            });
            html += `</div>`;
            timelineContainer.innerHTML = html;
            return;
        }

        const dayIndex = parseInt(dayNumber, 10) - 1;
        const dayData = dalatData.days[dayIndex];
        if (!dayData) return;

        let html = `<div class="day-timeline-wrapper">`;

        dayData.events.forEach(evt => {
            const typeClass = evt.type ? `type-${evt.type}` : '';
            const tagClass = evt.type ? `tag-${evt.type}` : '';
            const mapBtnHTML = evt.mapQuery ? 
                `<a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(evt.mapQuery)}" target="_blank" rel="noopener" class="btn-map-link">
                    <i class="fa-solid fa-diamond-turn-right"></i> Chỉ Đường Maps
                </a>` : '';

            html += `
                <div class="timeline-node ${typeClass}">
                    <div class="timeline-dot"></div>
                    <div class="timeline-card glass-card">
                        <div class="node-header">
                            <span class="node-time"><i class="fa-regular fa-clock"></i> ${evt.time}</span>
                            <span class="node-tag ${tagClass}">${evt.type || 'Lịch trình'}</span>
                        </div>
                        <h3 class="node-title">${evt.title}</h3>
                        <div class="node-location"><i class="fa-solid fa-location-dot"></i> ${evt.location}</div>
                        <p class="node-notes">${evt.notes}</p>
                        ${mapBtnHTML}
                    </div>
                </div>
            `;
        });

        html += `</div>`;
        timelineContainer.innerHTML = html;
    }

    dayTabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            dayTabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const dayAttr = btn.getAttribute('data-day');
            renderDayTimeline(dayAttr);
        });
    });

    // Initial Day 1 Timeline Render
    renderDayTimeline(1);

    // --- 6. EXPENSE TABLE & FILTER RENDERER ---
    const expenseContainer = document.getElementById('expense-list-container');
    const expenseFilterBtns = document.querySelectorAll('.expense-filter-btn');

    function renderExpenses(filterCategory) {
        if (!expenseContainer || !dalatData) return;

        const expenses = dalatData.expenses.filter(exp => {
            return filterCategory === 'all' || exp.category === filterCategory;
        });

        let html = `
            <table class="expense-table">
                <thead>
                    <tr>
                        <th>Khoản Mục Chi Phí</th>
                        <th>Ghi Chú Chi Tiết</th>
                        <th>Số Tiền (VND)</th>
                    </tr>
                </thead>
                <tbody>
        `;

        let currentTotal = 0;
        expenses.forEach(exp => {
            currentTotal += exp.cost;
            html += `
                <tr>
                    <td><strong>${exp.name}</strong></td>
                    <td class="text-muted">${exp.note}</td>
                    <td class="expense-cost">${exp.cost.toLocaleString('vi-VN')} đ</td>
                </tr>
            `;
        });

        html += `
                </tbody>
            </table>
            <div style="margin-top: 20px; text-align: right; font-size: 1.1rem;">
                <strong>Tổng Lọc: <span style="color: var(--secondary); font-family: 'Fira Code', monospace;">${currentTotal.toLocaleString('vi-VN')} đ</span></strong>
            </div>
        `;

        expenseContainer.innerHTML = html;
    }

    expenseFilterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            expenseFilterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const filterVal = btn.getAttribute('data-filter');
            renderExpenses(filterVal);
        });
    });

    // Initial Expenses Render
    renderExpenses('all');

    // --- 7. MEDIA MASONRY GALLERY & LIGHTBOX MODAL ---
    const galleryGrid = document.getElementById('gallery-grid');
    const lightboxModal = document.getElementById('lightbox-modal');
    const lightboxMediaWrapper = document.getElementById('lightbox-media-wrapper');
    const lightboxCaptionText = document.getElementById('lightbox-caption-text');
    const lightboxCloseBtn = document.querySelector('.lightbox-close-btn');

    if (galleryGrid && dalatData.gallery) {
        galleryGrid.innerHTML = '';
        dalatData.gallery.forEach((item) => {
            const el = document.createElement('div');
            el.className = 'gallery-item';

            if (item.type === 'video') {
                el.innerHTML = `
                    <video src="${item.url}" muted preload="metadata"></video>
                    <div class="video-play-badge"><i class="fa-solid fa-play"></i></div>
                    <div class="gallery-overlay">
                        <p class="gallery-caption">${item.caption}</p>
                    </div>
                `;
            } else {
                el.innerHTML = `
                    <img src="${item.url}" alt="${item.caption}" loading="lazy">
                    <div class="gallery-overlay">
                        <p class="gallery-caption">${item.caption}</p>
                    </div>
                `;
            }

            el.addEventListener('click', () => {
                openLightbox(item);
            });

            galleryGrid.appendChild(el);
        });
    }

    function openLightbox(item) {
        if (!lightboxModal || !lightboxMediaWrapper || !lightboxCaptionText) return;

        lightboxMediaWrapper.innerHTML = '';
        if (item.type === 'video') {
            lightboxMediaWrapper.innerHTML = `<video src="${item.url}" controls autoplay style="max-width: 100%; max-height: 75vh; border-radius: 12px;"></video>`;
        } else {
            lightboxMediaWrapper.innerHTML = `<img src="${item.url}" alt="${item.caption}" style="max-width: 100%; max-height: 75vh; border-radius: 12px;">`;
        }

        lightboxCaptionText.textContent = item.caption;
        lightboxModal.classList.add('active');
        lightboxModal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
        if (!lightboxModal) return;
        lightboxModal.classList.remove('active');
        lightboxModal.setAttribute('aria-hidden', 'true');
        lightboxMediaWrapper.innerHTML = '';
        document.body.style.overflow = '';
    }

    if (lightboxCloseBtn) lightboxCloseBtn.addEventListener('click', closeLightbox);
    if (lightboxModal) {
        lightboxModal.addEventListener('click', (e) => {
            if (e.target === lightboxModal) closeLightbox();
        });
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightboxModal && lightboxModal.classList.contains('active')) {
            closeLightbox();
        }
    });

    // --- 8. BACK TO TOP BUTTON ---
    const backToTopBtn = document.getElementById('back-to-top');
    if (backToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 400) {
                backToTopBtn.classList.add('visible');
            } else {
                backToTopBtn.classList.remove('visible');
            }
        });

        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
});
