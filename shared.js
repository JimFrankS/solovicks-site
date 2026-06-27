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
                <a class="anchor-text" href="mailto:info@solovickseng.com">info@solovickseng.com</a><br/>
                <a class="anchor-text" href="tel:+263719331594">+263 71 933 1594</a><br/>
                <a class="anchor-text" href="https://wa.me/+263719331594" target="_blank" rel="noopener noreferrer">WhatsApp</a>
            </div>
            <div class="footer-section">
                <h3 class="footer-heading">Headquarters</h3>
                <p>1237 Hatcliffe</p>
                <p>Harare</p>
                <p>Zimbabwe</p>
            </div>
            <div class="footer-section">
                <h3 class="footer-heading">Connect</h3>
                <a class="anchor-text" href="https://www.linkedin.com/company/solovicks-engineering-associates/" target="_blank" rel="noopener noreferrer">LinkedIn</a><br/>
                <a class="anchor-text" href="https://www.facebook.com/share/18uF3bvxzt/" target="_blank" rel="noopener noreferrer">Facebook</a><br/>
                <a class="anchor-text" href="privacy.html">Privacy Policy</a><br/>
                <a class="anchor-text" href="terms.html">Terms of Service</a>
            </div>
        </div>
        <div class="footer-credits">
            <p>&copy; 2026 Solovicks Engineering Associates. All rights reserved.</p>
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
