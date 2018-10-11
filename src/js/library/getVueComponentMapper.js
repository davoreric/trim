import {each, assignDeep} from '../library/toolkit';

const vueOptions = [
    'props', 'computed', 'watch',
    'template', 'render', 'renderError',
    'beforeCreate', 'created', 'beforeMount', 'mounted',
    'beforeUpdate', 'updated', 'activated', 'deactivated',
    'beforeDestroy', 'destroyed', 'errorCaptured'
];

export default function(params) {

    return function(blueprint) {

        const Parent = params.extends;
        const vueObject = {};
        const data = {};
        const methods = {};

        each(blueprint, (value, key) => {

            if (vueOptions.indexOf(key) >= 0) {
                vueObject[key] = value;
            } else if (params.dataKeys.indexOf(key) >= 0) {
                data[key] = value;
            } else if (typeof value === 'function') {
                methods[key] = value;
            }

        });

        return Parent.extend(assignDeep(vueObject, {
            data() {
                return assignDeep({}, data);
            },
            methods
        }));

    };

}
