
class Card {
    constructor(title, type, info, description) {
        this.title = title;
        this.type = type;
        this.info = info;
        this.description = description;
    }

    build() {
        return '' +
            '<table class="carte type_'+this.type.replace(' ', '_')+'">' +
            '  <tr>' +
            '    <th class="title">' + this.title + '</th>' +
            '  </tr>' +
            '  <tr>' +
            '    <td class="type">Type: ' + this.type + '</td>' +
            '  </tr>' +
            '  <tr>' +
            '    <td class="info">' + this.info + '</td>' +
            '  </tr>' +
            '  <tr>' +
            '    <td class="description">' + this.description + '</td>' +
            '  </tr>' +
            '</table>';
    }

    show() {
        document.getElementById('body').innerHTML += this.build();
    }
}
