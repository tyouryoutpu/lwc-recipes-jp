({
    handleFilterChange: function(component, event) {
        var filters = event.getParam('filters');
        component.set('v.message', filters.length > 0 ? '選択されたもの: ' + filters.join() : '選択されていません');
    },
});
