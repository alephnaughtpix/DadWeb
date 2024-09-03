document.addEventListener('DOMContentLoaded', function() {
    var page_has_moved = document.getElementById('page_has_moved');
    if (document.cookie.indexOf('page_has_moved=1') === -1) {
        page_has_moved.classList.remove('hidden');
        fadeIn(page_has_moved);
    }
    document.getElementById('close_page_has_moved').addEventListener('click', function() {
        document.cookie = 'page_has_moved=1; secure';
        fadeOut(page_has_moved, function() {
            page_has_moved.classList.add('hidden');
        });
    });
});