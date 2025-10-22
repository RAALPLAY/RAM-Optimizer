$(document).ready(function() {

    // --- Fetch Update Info ---
    function fetchUpdateInfo() {
        $.ajax({
            url: "update.xml",
            dataType: "xml",
            success: function(xml) {
                const $update = $(xml).find('update');
                const url = $update.find('link').text();
                const version = $update.find('version').text();

                // Update all download links and version text
                $('#ver').text(`v${version}`);
                $('#download-main').attr('href', url);
                $('#download-cta').attr('href', url);
            },
            error: function(jqXHR, textStatus, errorThrown) {
                console.error("Error loading update.xml:", textStatus, errorThrown);
                // Fallback: hide version or show error
                $('#ver').text('');
            }
        });
    }
    fetchUpdateInfo();

    // --- Scroll-reveal Animations using Intersection Observer ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); // Animate only once
            }
        });
    }, {
        threshold: 0.1 // Trigger when 10% of the element is visible
    });

    // Observe all elements with the class
    $('.animate-on-scroll').each(function() {
        observer.observe(this);
    });

});