/**
 * shared.js — Injects the global site footer into every page.
 * To update the footer (contact details, links, copyright),
 * edit this file only. All pages will reflect the change automatically.
 */
(function () {
    const footerHTML = `
    <footer id="contact">
        <div class="footer-content">
            <div class="footer-section">
                <h3 class="footer-heading">Contact</h3>
                <a class="anchor-text" href="mailto:info@ibantutech.com">info@ibantutech.com</a><br/>
                <a class="anchor-text" href="tel:+263719729537">+263 71 972 9537</a>
            </div>
            <div class="footer-section">
                <h3 class="footer-heading">Headquarters</h3>
                <p>Shop Number 2, JB Rusike Complex</p>
                <p>Stand Number 485, Juru, Goromonzi</p>
                <p>Zimbabwe</p>
            </div>
            <div class="footer-section">
                <h3 class="footer-heading">Legal</h3>
                <a class="anchor-text" href="privacy.html">Privacy Policy</a><br/>
                <a class="anchor-text" href="terms.html">Terms of Service</a>
            </div>
        </div>
        <div class="footer-credits">
            <p>&copy; 2026 iBantu Technologies (Pvt) Ltd. All rights reserved.</p>
        </div>
        <a class="scroll-to-top" href="#top-of-page" aria-label="Scroll to top">
            <i class="fa-solid fa-arrow-up"></i>
        </a>
    </footer>`;

    const placeholder = document.getElementById('site-footer');
    if (placeholder) {
        placeholder.outerHTML = footerHTML;
    }
})();
