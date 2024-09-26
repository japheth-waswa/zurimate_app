
$(document).ajaxStop(function () {
    // addMenuItemsInHelpDropdown();
    addMenuItemsInSideMenu();
});

function addMenuItemsInHelpDropdown() {
    if ($('.dropdown-help').length > 0) {
        if ($('.dropdown-help .dropdown-menu .zurimate-menu-item').length === 0) {
            $('.dropdown-help .dropdown-menu').append('<a href="https://www.example.com" target="_blank" class="dropdown-item zurimate-menu-item">External Link</a>');
            $('.dropdown-help .dropdown-menu').append('<a href="https://www.another-example.com" target="_blank" class="dropdown-item zurimate-menu-item">Another Link</a>');
        }
    }
}

function addMenuItemsInSideMenu() {
    if ($('.sidebar-menu').length > 0) {
        var publicSection = $('.standard-sidebar-section[data-title="Public"]');
        if (publicSection.length > 0) {
            if ($('.standard-sidebar-section .zurimate-menu-item-side-bar').length === 0) {
                // publicSection.append('<div class="is-draggable sidebar-item-container zurimate-menu-item-side-bar"item-is-hidden=0 item-name="Z Item"item-parent=""item-public=1><div class="desk-sidebar-item standard-sidebar-item"><a class=item-anchor href=/app/zurimate-item title="Z Item"><span class=sidebar-item-icon item-icon=tool><svg aria-hidden=true class="icon icon-md"><use href=#icon-tool></use></svg> </span><span class=sidebar-item-label>Z Item<span></span></span></a></div><div class="nested-container sidebar-child-item"></div></div>');
                publicSection.append(addSideMenu({ title: "Mavoko", uri: "/app/website" }));
                publicSection.append(addSideMenu({ title: "Mvk Water", uri: "/app/mvk_water" }));
                publicSection.append(addSideMenu({ title: "Mvk Units", uri: "/app/mvk_units" }));
            }
        }
    }
}

function addSideMenu({ title, uri = "/app/website" }) {
    return '<div class="is-draggable sidebar-item-container zurimate-menu-item-side-bar"item-is-hidden=0 item-name="' + title + '"item-parent=""item-public=1><div class="desk-sidebar-item standard-sidebar-item"><a class=item-anchor href="' + uri + '" title="' + title + '"><span class=sidebar-item-icon item-icon=tool><svg aria-hidden=true class="icon icon-md"><use href=#icon-tool></use></svg> </span><span class=sidebar-item-label>' + title + '<span></span></span></a></div><div class="nested-container sidebar-child-item"></div></div>';
}