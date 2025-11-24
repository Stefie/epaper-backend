module.exports = [
"[project]/node_modules/.pnpm/payload@3.64.0_graphql@16.12.0_typescript@5.5.2/node_modules/payload/dist/utilities/getBlockSelect.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * This is used for the Select API to determine the select level of a block.
 * It will ensure that `id` and `blockType` are always included in the select object.
 * @returns { blockSelect: boolean | SelectType, blockSelectMode: SelectMode }
 */ __turbopack_context__.s([
    "getBlockSelect",
    ()=>getBlockSelect
]);
const getBlockSelect = ({ block, select, selectMode })=>{
    if (typeof select === 'object') {
        let blockSelectMode = selectMode;
        const blocksSelect = {
            ...select
        };
        let blockSelect = blocksSelect[block.slug];
        // sanitize `{ blocks: { cta: false }}` to `{ blocks: { cta: { id: true, blockType: true }}}`
        if (selectMode === 'exclude' && blockSelect === false) {
            blockSelectMode = 'include';
            blockSelect = {
                id: true,
                blockType: true
            };
        } else if (selectMode === 'include') {
            if (!blockSelect) {
                blockSelect = {};
            }
            if (typeof blockSelect === 'object') {
                blockSelect = {
                    ...blockSelect
                };
                blockSelect['id'] = true;
                blockSelect['blockType'] = true;
            }
        }
        return {
            blockSelect: blockSelect,
            blockSelectMode
        };
    }
    return {
        blockSelect: select,
        blockSelectMode: selectMode
    };
}; //# sourceMappingURL=getBlockSelect.js.map
}),
"[project]/node_modules/.pnpm/payload@3.64.0_graphql@16.12.0_typescript@5.5.2/node_modules/payload/dist/utilities/stripUnselectedFields.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "stripUnselectedFields",
    ()=>stripUnselectedFields
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$64$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$5$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.64.0_graphql@16.12.0_typescript@5.5.2/node_modules/payload/dist/fields/config/types.js [app-rsc] (ecmascript)");
;
const stripUnselectedFields = ({ field, select, selectMode, siblingDoc })=>{
    let shouldContinue = true;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$64$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$5$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fieldAffectsData"])(field) && select && selectMode && field.name) {
        if (selectMode === 'include') {
            if (!select[field.name]) {
                delete siblingDoc[field.name];
                shouldContinue = false;
            }
        }
        if (selectMode === 'exclude') {
            if (select[field.name] === false) {
                delete siblingDoc[field.name];
                shouldContinue = false;
            }
        }
    }
    return shouldContinue;
}; //# sourceMappingURL=stripUnselectedFields.js.map
}),
"[project]/node_modules/.pnpm/payload@3.64.0_graphql@16.12.0_typescript@5.5.2/node_modules/payload/dist/utilities/deepCopyObject.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "deepCopyObject",
    ()=>deepCopyObject,
    "deepCopyObjectComplex",
    ()=>deepCopyObjectComplex,
    "deepCopyObjectSimple",
    ()=>deepCopyObjectSimple,
    "deepCopyObjectSimpleWithoutReactComponents",
    ()=>deepCopyObjectSimpleWithoutReactComponents
]);
/* eslint-disable @typescript-eslint/no-explicit-any */ /*
Main deepCopyObject handling - from rfdc: https://github.com/davidmarkclements/rfdc/blob/master/index.js

Copyright 2019 "David Mark Clements <david.mark.clements@gmail.com>"

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated
documentation files (the "Software"), to deal in the Software without restriction, including without limitation
the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and
to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions
of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED
TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF
CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
IN THE SOFTWARE.
*/ function copyBuffer(cur) {
    if (cur instanceof Buffer) {
        return Buffer.from(cur);
    }
    return new cur.constructor(cur.buffer.slice(), cur.byteOffset, cur.length);
}
const constructorHandlers = new Map();
constructorHandlers.set(Date, (o)=>new Date(o));
constructorHandlers.set(Map, (o, fn)=>new Map(cloneArray(Array.from(o), fn)));
constructorHandlers.set(Set, (o, fn)=>new Set(cloneArray(Array.from(o), fn)));
constructorHandlers.set(RegExp, (regex)=>new RegExp(regex.source, regex.flags));
let handler = null;
function cloneArray(a, fn) {
    const keys = Object.keys(a);
    const a2 = new Array(keys.length);
    for(let i = 0; i < keys.length; i++){
        const k = keys[i];
        const cur = a[k];
        if (typeof cur !== 'object' || cur === null) {
            a2[k] = cur;
        } else if (cur instanceof RegExp) {
            a2[k] = new RegExp(cur.source, cur.flags);
        } else if (cur.constructor !== Object && (handler = constructorHandlers.get(cur.constructor))) {
            a2[k] = handler(cur, fn);
        } else if (ArrayBuffer.isView(cur)) {
            a2[k] = copyBuffer(cur);
        } else {
            a2[k] = fn(cur);
        }
    }
    return a2;
}
const deepCopyObject = (o)=>{
    if (typeof o !== 'object' || o === null) {
        return o;
    }
    if (Array.isArray(o)) {
        return cloneArray(o, deepCopyObject);
    }
    if (o instanceof RegExp) {
        return new RegExp(o.source, o.flags);
    }
    if (o.constructor !== Object && (handler = constructorHandlers.get(o.constructor))) {
        return handler(o, deepCopyObject);
    }
    const o2 = {};
    for(const k in o){
        if (Object.hasOwnProperty.call(o, k) === false) {
            continue;
        }
        const cur = o[k];
        if (typeof cur !== 'object' || cur === null) {
            o2[k] = cur;
        } else if (cur instanceof RegExp) {
            o2[k] = new RegExp(cur.source, cur.flags);
        } else if (cur.constructor !== Object && (handler = constructorHandlers.get(cur.constructor))) {
            o2[k] = handler(cur, deepCopyObject);
        } else if (ArrayBuffer.isView(cur)) {
            o2[k] = copyBuffer(cur);
        } else {
            o2[k] = deepCopyObject(cur);
        }
    }
    return o2;
};
function deepCopyObjectSimple(value, filterUndefined = false) {
    if (typeof value !== 'object' || value === null) {
        return value;
    } else if (Array.isArray(value)) {
        return value.map((e)=>typeof e !== 'object' || e === null ? e : deepCopyObjectSimple(e, filterUndefined));
    } else {
        if (value instanceof Date) {
            return new Date(value);
        }
        const ret = {};
        for(const k in value){
            const v = value[k];
            if (filterUndefined && v === undefined) {
                continue;
            }
            ret[k] = typeof v !== 'object' || v === null ? v : deepCopyObjectSimple(v, filterUndefined);
        }
        return ret;
    }
}
function deepCopyObjectSimpleWithoutReactComponents(value) {
    if (typeof value === 'object' && value !== null && '$$typeof' in value && typeof value.$$typeof === 'symbol') {
        return undefined;
    } else if (typeof value !== 'object' || value === null) {
        return value;
    } else if (Array.isArray(value)) {
        return value.map((e)=>typeof e !== 'object' || e === null ? e : deepCopyObjectSimpleWithoutReactComponents(e));
    } else {
        if (value instanceof Date) {
            return new Date(value);
        }
        const ret = {};
        for(const k in value){
            const v = value[k];
            ret[k] = typeof v !== 'object' || v === null ? v : deepCopyObjectSimpleWithoutReactComponents(v);
        }
        return ret;
    }
}
function deepCopyObjectComplex(object, cache = new WeakMap()) {
    if (object === null) {
        return null;
    }
    if (cache.has(object)) {
        return cache.get(object);
    }
    // Handle File
    if (object instanceof File) {
        return object;
    }
    // Handle Date
    if (object instanceof Date) {
        return new Date(object.getTime());
    }
    // Handle RegExp
    if (object instanceof RegExp) {
        return new RegExp(object.source, object.flags);
    }
    // Handle Map
    if (object instanceof Map) {
        const clonedMap = new Map();
        cache.set(object, clonedMap);
        for (const [key, value] of object.entries()){
            clonedMap.set(key, deepCopyObjectComplex(value, cache));
        }
        return clonedMap;
    }
    // Handle Set
    if (object instanceof Set) {
        const clonedSet = new Set();
        cache.set(object, clonedSet);
        for (const value of object.values()){
            clonedSet.add(deepCopyObjectComplex(value, cache));
        }
        return clonedSet;
    }
    // Handle Array and Object
    if (typeof object === 'object' && object !== null) {
        if ('$$typeof' in object && typeof object.$$typeof === 'symbol') {
            return object;
        }
        const clonedObject = Array.isArray(object) ? [] : Object.create(Object.getPrototypeOf(object));
        cache.set(object, clonedObject);
        for(const key in object){
            if (Object.prototype.hasOwnProperty.call(object, key) || Object.getOwnPropertySymbols(object).includes(key)) {
                clonedObject[key] = deepCopyObjectComplex(object[key], cache);
            }
        }
        return clonedObject;
    }
    // Handle all other cases
    return object;
} //# sourceMappingURL=deepCopyObject.js.map
}),
"[project]/node_modules/.pnpm/payload@3.64.0_graphql@16.12.0_typescript@5.5.2/node_modules/payload/dist/utilities/isValidID.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isValidID",
    ()=>isValidID
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$bson$2d$objectid$40$2$2e$0$2e$4$2f$node_modules$2f$bson$2d$objectid$2f$objectid$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/bson-objectid@2.0.4/node_modules/bson-objectid/objectid.js [app-rsc] (ecmascript)");
;
const ObjectId = 'default' in __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$bson$2d$objectid$40$2$2e$0$2e$4$2f$node_modules$2f$bson$2d$objectid$2f$objectid$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"] ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$bson$2d$objectid$40$2$2e$0$2e$4$2f$node_modules$2f$bson$2d$objectid$2f$objectid$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].default : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$bson$2d$objectid$40$2$2e$0$2e$4$2f$node_modules$2f$bson$2d$objectid$2f$objectid$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"];
const isValidID = (value, type)=>{
    if (type === 'text' && value) {
        if ([
            'object',
            'string'
        ].includes(typeof value)) {
            const isObjectID = ObjectId.isValid(value);
            return typeof value === 'string' || isObjectID;
        }
        return false;
    }
    if (typeof value === 'number' && !Number.isNaN(value)) {
        return true;
    }
    if (type === 'ObjectID') {
        return ObjectId.isValid(String(value));
    }
}; //# sourceMappingURL=isValidID.js.map
}),
"[project]/node_modules/.pnpm/payload@3.64.0_graphql@16.12.0_typescript@5.5.2/node_modules/payload/dist/utilities/isNumber.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isNumber",
    ()=>isNumber
]);
function isNumber(value) {
    if (value === null || value === undefined || typeof value === 'string' && value.trim() === '') {
        return false;
    }
    return !Number.isNaN(Number(value));
} //# sourceMappingURL=isNumber.js.map
}),
"[project]/node_modules/.pnpm/payload@3.64.0_graphql@16.12.0_typescript@5.5.2/node_modules/payload/dist/utilities/isReactComponent.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isReactClientComponent",
    ()=>isReactClientComponent,
    "isReactComponentOrFunction",
    ()=>isReactComponentOrFunction,
    "isReactServerComponentOrFunction",
    ()=>isReactServerComponentOrFunction
]);
const clientRefSymbol = Symbol.for('react.client.reference');
function isReactServerComponentOrFunction(component) {
    return typeof component === 'function' && component.$$typeof !== clientRefSymbol;
}
function isReactClientComponent(component) {
    return typeof component === 'function' && component.$$typeof === clientRefSymbol;
}
function isReactComponentOrFunction(component) {
    return typeof component === 'function';
} //# sourceMappingURL=isReactComponent.js.map
}),
"[project]/node_modules/.pnpm/payload@3.64.0_graphql@16.12.0_typescript@5.5.2/node_modules/payload/dist/utilities/isPlainObject.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isPlainObject",
    ()=>isPlainObject
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$64$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$5$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$isReactComponent$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.64.0_graphql@16.12.0_typescript@5.5.2/node_modules/payload/dist/utilities/isReactComponent.js [app-rsc] (ecmascript)");
;
function isPlainObject(o) {
    // Is this a React component?
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$64$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$5$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$isReactComponent$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isReactComponentOrFunction"])(o)) {
        return false;
    }
    // from https://github.com/fastify/deepmerge/blob/master/index.js#L77
    return typeof o === 'object' && o !== null && !(o instanceof RegExp) && !(o instanceof Date);
} //# sourceMappingURL=isPlainObject.js.map
}),
"[project]/node_modules/.pnpm/payload@3.64.0_graphql@16.12.0_typescript@5.5.2/node_modules/payload/dist/utilities/deepMerge.js [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "deepMergeWithCombinedArrays",
    ()=>deepMergeWithCombinedArrays,
    "deepMergeWithReactComponents",
    ()=>deepMergeWithReactComponents,
    "deepMergeWithSourceArrays",
    ()=>deepMergeWithSourceArrays
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$deepmerge$40$4$2e$3$2e$1$2f$node_modules$2f$deepmerge$2f$dist$2f$cjs$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/deepmerge@4.3.1/node_modules/deepmerge/dist/cjs.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$64$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$5$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$isPlainObject$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.64.0_graphql@16.12.0_typescript@5.5.2/node_modules/payload/dist/utilities/isPlainObject.js [app-rsc] (ecmascript)");
;
;
;
function deepMergeWithCombinedArrays(obj1, obj2, options = {}) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$deepmerge$40$4$2e$3$2e$1$2f$node_modules$2f$deepmerge$2f$dist$2f$cjs$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(obj1, obj2, {
        arrayMerge: (target, source, options)=>{
            const destination = target.slice();
            source.forEach((item, index)=>{
                if (typeof destination[index] === 'undefined') {
                    destination[index] = options?.cloneUnlessOtherwiseSpecified(item, options);
                } else if (options?.isMergeableObject(item)) {
                    destination[index] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$deepmerge$40$4$2e$3$2e$1$2f$node_modules$2f$deepmerge$2f$dist$2f$cjs$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(target[index], item, options);
                } else if (target.indexOf(item) === -1) {
                    destination.push(item);
                }
            });
            return destination;
        },
        ...options
    });
}
function deepMergeWithSourceArrays(obj1, obj2) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$deepmerge$40$4$2e$3$2e$1$2f$node_modules$2f$deepmerge$2f$dist$2f$cjs$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(obj1, obj2, {
        arrayMerge: (_, source)=>source
    });
}
function deepMergeWithReactComponents(obj1, obj2) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$deepmerge$40$4$2e$3$2e$1$2f$node_modules$2f$deepmerge$2f$dist$2f$cjs$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(obj1, obj2, {
        isMergeableObject: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$64$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$5$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$isPlainObject$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isPlainObject"]
    });
} //# sourceMappingURL=deepMerge.js.map
}),
"[project]/node_modules/.pnpm/payload@3.64.0_graphql@16.12.0_typescript@5.5.2/node_modules/payload/dist/utilities/getTranslatedLabel.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getTranslatedLabel",
    ()=>getTranslatedLabel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$translations$40$3$2e$64$2e$0$2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$utilities$2f$getTranslation$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@payloadcms+translations@3.64.0/node_modules/@payloadcms/translations/dist/utilities/getTranslation.js [app-rsc] (ecmascript)");
;
const getTranslatedLabel = (label, i18n)=>{
    if (typeof label === 'function') {
        return label({
            i18n: i18n,
            t: i18n.t
        });
    }
    if (typeof label === 'object') {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$translations$40$3$2e$64$2e$0$2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$utilities$2f$getTranslation$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTranslation"])(label, i18n);
    }
    return label;
}; //# sourceMappingURL=getTranslatedLabel.js.map
}),
"[project]/node_modules/.pnpm/payload@3.64.0_graphql@16.12.0_typescript@5.5.2/node_modules/payload/dist/utilities/findUp.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "findUp",
    ()=>findUp,
    "findUpSync",
    ()=>findUpSync,
    "pathExistsAndIsAccessible",
    ()=>pathExistsAndIsAccessible,
    "pathExistsAndIsAccessibleSync",
    ()=>pathExistsAndIsAccessibleSync
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/fs [external] (fs, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
;
;
function findUpSync({ condition, dir, fileNames }) {
    const { root } = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].parse(dir);
    while(true){
        if (fileNames?.length) {
            let found = false;
            for (const fileName of fileNames){
                const filePath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(dir, fileName);
                const exists = pathExistsAndIsAccessibleSync(filePath);
                if (exists) {
                    if (!condition) {
                        return filePath;
                    }
                    found = true;
                    break;
                }
            }
            if (!found && dir !== root) {
                dir = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].dirname(dir) // Move up one directory level.
                ;
                continue;
            }
        }
        const result = condition?.(dir);
        if (result === true) {
            return dir;
        }
        if (typeof result === 'string' && result?.length) {
            return result;
        }
        if (dir === root) {
            return null // Reached the root directory without a match.
            ;
        }
        dir = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].dirname(dir) // Move up one directory level.
        ;
    }
}
async function findUp({ condition, dir, fileNames }) {
    const { root } = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].parse(dir);
    while(true){
        if (fileNames?.length) {
            let found = false;
            for (const fileName of fileNames){
                const filePath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].resolve(dir, fileName);
                const exists = await pathExistsAndIsAccessible(filePath);
                if (exists) {
                    if (!condition) {
                        return filePath;
                    }
                    found = true;
                    break;
                }
            }
            if (!found && dir !== root) {
                dir = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].dirname(dir) // Move up one directory level.
                ;
                continue;
            }
        }
        const result = await condition?.(dir);
        if (result === true) {
            return dir;
        }
        if (typeof result === 'string' && result?.length) {
            return result;
        }
        if (dir === root) {
            return null // Reached the root directory without a match.
            ;
        }
        dir = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].dirname(dir) // Move up one directory level.
        ;
    }
}
function pathExistsAndIsAccessibleSync(path) {
    try {
        __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].accessSync(path);
        return true;
    } catch  {
        return false;
    }
}
async function pathExistsAndIsAccessible(path) {
    try {
        await __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].promises.access(path);
        return true;
    } catch  {
        return false;
    }
} //# sourceMappingURL=findUp.js.map
}),
"[project]/node_modules/.pnpm/payload@3.64.0_graphql@16.12.0_typescript@5.5.2/node_modules/payload/dist/utilities/dependencies/isError.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
  This source code has been taken and modified from https://github.com/vercel/next.js/blob/be87132327ea28acd4bf7af09a401bac2374cb64/packages/next/src/lib/is-error.ts

  License:

  The MIT License (MIT)

  Copyright (c) 2024 Vercel, Inc.

  Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/ __turbopack_context__.s([
    "isError",
    ()=>isError
]);
function isError(err) {
    return typeof err === 'object' && err !== null && 'name' in err && 'message' in err;
} //# sourceMappingURL=isError.js.map
}),
"[project]/node_modules/.pnpm/payload@3.64.0_graphql@16.12.0_typescript@5.5.2/node_modules/payload/dist/utilities/dependencies/realPath.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "realpathSync",
    ()=>realpathSync
]);
/*
  This source code has been taken from https://github.com/vercel/next.js/blob/39498d604c3b25d92a483153fe648a7ee456fbda/packages/next/src/lib/realpath.ts

  License:

  The MIT License (MIT)

  Copyright (c) 2024 Vercel, Inc.

  Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/ var __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/fs [external] (fs, cjs)");
;
const isWindows = process.platform === 'win32';
const realpathSync = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].realpathSync.native; //# sourceMappingURL=realPath.js.map
}),
"[project]/node_modules/.pnpm/payload@3.64.0_graphql@16.12.0_typescript@5.5.2/node_modules/payload/dist/utilities/dependencies/resolveFrom.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "resolveFrom",
    ()=>resolveFrom
]);
/*
  This source code has been taken and modified from https://github.com/vercel/next.js/blob/39498d604c3b25d92a483153fe648a7ee456fbda/packages/next/src/lib/resolve-from.ts

  License:

  The MIT License (MIT)

  Copyright (c) 2024 Vercel, Inc.

  Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/ // source: https://github.com/sindresorhus/resolve-from
var __TURBOPACK__imported__module__$5b$externals$5d2f$module__$5b$external$5d$__$28$module$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/module [external] (module, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$64$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$5$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$dependencies$2f$isError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.64.0_graphql@16.12.0_typescript@5.5.2/node_modules/payload/dist/utilities/dependencies/isError.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$64$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$5$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$dependencies$2f$realPath$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.64.0_graphql@16.12.0_typescript@5.5.2/node_modules/payload/dist/utilities/dependencies/realPath.js [app-rsc] (ecmascript)");
const __TURBOPACK__import$2e$meta__ = {
    get url () {
        return `file://${__turbopack_context__.P("node_modules/.pnpm/payload@3.64.0_graphql@16.12.0_typescript@5.5.2/node_modules/payload/dist/utilities/dependencies/resolveFrom.js")}`;
    }
};
;
;
;
;
const resolveFrom = (fromDirectory, moduleId, silent)=>{
    if (typeof fromDirectory !== 'string') {
        throw new TypeError(`Expected \`fromDir\` to be of type \`string\`, got \`${typeof fromDirectory}\``);
    }
    if (typeof moduleId !== 'string') {
        throw new TypeError(`Expected \`moduleId\` to be of type \`string\`, got \`${typeof moduleId}\``);
    }
    try {
        fromDirectory = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$64$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$5$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$dependencies$2f$realPath$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["realpathSync"])(fromDirectory);
    } catch (error) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$64$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$5$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$dependencies$2f$isError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isError"])(error) && error.code === 'ENOENT') {
            fromDirectory = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].resolve(fromDirectory);
        } else if (silent) {
            return;
        } else {
            throw error;
        }
    }
    const fromFile = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(fromDirectory, 'noop.js');
    const require = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$module__$5b$external$5d$__$28$module$2c$__cjs$29$__["createRequire"])(__TURBOPACK__import$2e$meta__.url);
    const Module = __turbopack_context__.r("[externals]/module [external] (module, cjs)");
    const resolveFileName = ()=>{
        return Module._resolveFilename(moduleId, {
            id: fromFile,
            filename: fromFile,
            paths: Module._nodeModulePaths(fromDirectory)
        });
    };
    if (silent) {
        try {
            return resolveFileName();
        } catch (ignore) {
            return;
        }
    }
    return resolveFileName();
}; //# sourceMappingURL=resolveFrom.js.map
}),
"[project]/node_modules/.pnpm/payload@3.64.0_graphql@16.12.0_typescript@5.5.2/node_modules/payload/dist/utilities/dependencies/getDependencies.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getDependencies",
    ()=>getDependencies
]);
/*
  This source code has been taken and modified from https://github.com/vercel/next.js/blob/41a80533f900467e1b788bd2673abe2dca20be6a/packages/next/src/lib/has-necessary-dependencies.ts

  License:

  The MIT License (MIT)

  Copyright (c) 2024 Vercel, Inc.

  Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/ var __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/fs [external] (fs, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$url__$5b$external$5d$__$28$url$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/url [external] (url, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$64$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$5$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$findUp$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.64.0_graphql@16.12.0_typescript@5.5.2/node_modules/payload/dist/utilities/findUp.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$64$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$5$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$dependencies$2f$resolveFrom$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.64.0_graphql@16.12.0_typescript@5.5.2/node_modules/payload/dist/utilities/dependencies/resolveFrom.js [app-rsc] (ecmascript)");
const __TURBOPACK__import$2e$meta__ = {
    get url () {
        return `file://${__turbopack_context__.P("node_modules/.pnpm/payload@3.64.0_graphql@16.12.0_typescript@5.5.2/node_modules/payload/dist/utilities/dependencies/getDependencies.js")}`;
    }
};
;
;
;
;
;
const filename = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$url__$5b$external$5d$__$28$url$2c$__cjs$29$__["fileURLToPath"])(__TURBOPACK__import$2e$meta__.url);
const dirname = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].dirname(filename);
const payloadPkgDirname = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].resolve(dirname, '../../../') // pkg dir (outside src)
;
const resolvedCwd = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].resolve(process.cwd());
async function getDependencies(baseDir, requiredPackages) {
    const resolutions = new Map();
    const missingPackages = [];
    await Promise.all(requiredPackages.map(async (pkg)=>{
        try {
            const pkgPath = await __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["promises"].realpath((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$64$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$5$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$dependencies$2f$resolveFrom$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["resolveFrom"])(baseDir, pkg));
            const pkgDir = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].dirname(pkgPath);
            let packageJsonFilePath = null;
            const foundPackageJsonDir = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$64$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$5$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$findUp$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["findUp"])({
                dir: pkgDir,
                fileNames: [
                    'package.json'
                ]
            });
            if (foundPackageJsonDir) {
                const resolvedFoundPath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].resolve(foundPackageJsonDir);
                if (resolvedFoundPath.startsWith(resolvedCwd) || resolvedFoundPath.startsWith(payloadPkgDirname)) {
                    // We don't want to match node modules outside the user's project. Checking for both process.cwd and dirname is a reliable way to do this.
                    packageJsonFilePath = resolvedFoundPath;
                }
            }
            // No need to check if packageJsonFilePath exists - findUp checks that for us
            if (packageJsonFilePath) {
                // parse version
                const packageJson = JSON.parse(await __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["promises"].readFile(packageJsonFilePath, 'utf8'));
                const version = packageJson.version;
                resolutions.set(pkg, {
                    path: packageJsonFilePath,
                    version
                });
            } else {
                return missingPackages.push(pkg);
            }
        } catch (_) {
            return missingPackages.push(pkg);
        }
    }));
    return {
        missing: missingPackages,
        resolved: resolutions
    };
} //# sourceMappingURL=getDependencies.js.map
}),
"[project]/node_modules/.pnpm/payload@3.64.0_graphql@16.12.0_typescript@5.5.2/node_modules/payload/dist/utilities/dependencies/versionUtils.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "compareVersions",
    ()=>compareVersions,
    "parseVersion",
    ()=>parseVersion
]);
function parseVersion(version) {
    const [mainVersion, ...preReleases] = version.split('-');
    const parts = mainVersion.split('.').map(Number);
    return {
        parts,
        preReleases
    };
}
function extractNumbers(str) {
    const matches = str.match(/\d+/g) || [];
    return matches.map(Number);
}
function comparePreRelease(v1, v2) {
    const num1 = extractNumbers(v1);
    const num2 = extractNumbers(v2);
    for(let i = 0; i < Math.max(num1.length, num2.length); i++){
        if ((num1[i] || 0) < (num2[i] || 0)) {
            return -1;
        }
        if ((num1[i] || 0) > (num2[i] || 0)) {
            return 1;
        }
    }
    // If numeric parts are equal, compare the whole string
    if (v1 < v2) {
        return -1;
    }
    if (v1 > v2) {
        return 1;
    }
    return 0;
}
function compareVersions(compare, to, customVersionParser) {
    const { parts: parts1, preReleases: preReleases1 } = customVersionParser ? customVersionParser(compare) : parseVersion(compare);
    const { parts: parts2, preReleases: preReleases2 } = customVersionParser ? customVersionParser(to) : parseVersion(to);
    // Compare main version parts
    for(let i = 0; i < Math.max(parts1.length, parts2.length); i++){
        if ((parts1[i] || 0) > (parts2[i] || 0)) {
            return 'greater';
        }
        if ((parts1[i] || 0) < (parts2[i] || 0)) {
            return 'lower';
        }
    }
    // Compare pre-release parts if main versions are equal
    if (preReleases1?.length || preReleases2?.length) {
        for(let i = 0; i < Math.max(preReleases1.length, preReleases2.length); i++){
            if (!preReleases1[i]) {
                return 'greater';
            }
            if (!preReleases2[i]) {
                return 'lower';
            }
            const result = comparePreRelease(preReleases1[i], preReleases2[i]);
            if (result !== 0) {
                return result === 1 ? 'greater' : 'lower';
            }
        // Equal => continue for loop to check for next pre-release part
        }
    }
    return 'equal';
} //# sourceMappingURL=versionUtils.js.map
}),
"[project]/node_modules/.pnpm/payload@3.64.0_graphql@16.12.0_typescript@5.5.2/node_modules/payload/dist/utilities/dependencies/dependencyChecker.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "checkDependencies",
    ()=>checkDependencies
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$url__$5b$external$5d$__$28$url$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/url [external] (url, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$64$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$5$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$dependencies$2f$getDependencies$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.64.0_graphql@16.12.0_typescript@5.5.2/node_modules/payload/dist/utilities/dependencies/getDependencies.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$64$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$5$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$dependencies$2f$versionUtils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.64.0_graphql@16.12.0_typescript@5.5.2/node_modules/payload/dist/utilities/dependencies/versionUtils.js [app-rsc] (ecmascript)");
const __TURBOPACK__import$2e$meta__ = {
    get url () {
        return `file://${__turbopack_context__.P("node_modules/.pnpm/payload@3.64.0_graphql@16.12.0_typescript@5.5.2/node_modules/payload/dist/utilities/dependencies/dependencyChecker.js")}`;
    }
};
;
;
;
;
const filename = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$url__$5b$external$5d$__$28$url$2c$__cjs$29$__["fileURLToPath"])(__TURBOPACK__import$2e$meta__.url);
const dirname = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].dirname(filename);
async function checkDependencies({ dependencyGroups, dependencyVersions }) {
    if (dependencyGroups?.length) {
        for (const dependencyGroup of dependencyGroups){
            const resolvedDependencies = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$64$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$5$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$dependencies$2f$getDependencies$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getDependencies"])(dirname, dependencyGroup.dependencies);
            // Go through each resolved dependency. If any dependency has a mismatching version, throw an error
            const foundVersions = {};
            for (const [_pkg, { version }] of resolvedDependencies.resolved){
                if (!Object.keys(foundVersions).includes(version)) {
                    foundVersions[version] = _pkg;
                }
            }
            if (Object.keys(foundVersions).length > 1) {
                const targetVersion = dependencyGroup.targetVersion ?? resolvedDependencies.resolved.get(dependencyGroup.targetVersionDependency)?.version;
                if (targetVersion) {
                    const formattedVersionsWithPackageNameString = Object.entries(foundVersions).filter(([version])=>version !== targetVersion).map(([version, pkg])=>`${pkg}@${version} (Please change this to ${targetVersion})`).join(', ');
                    throw new Error(`Mismatching "${dependencyGroup.name}" dependency versions found: ${formattedVersionsWithPackageNameString}. All "${dependencyGroup.name}" packages must have the same version. This is an error with your set-up, not a bug in Payload. Please go to your package.json and ensure all "${dependencyGroup.name}" packages have the same version.`);
                } else {
                    const formattedVersionsWithPackageNameString = Object.entries(foundVersions).map(([version, pkg])=>`${pkg}@${version}`).join(', ');
                    throw new Error(`Mismatching "${dependencyGroup.name}" dependency versions found: ${formattedVersionsWithPackageNameString}. All "${dependencyGroup.name}" packages must have the same version. This is an error with your set-up, not a bug in Payload. Please go to your package.json and ensure all "${dependencyGroup.name}" packages have the same version.`);
                }
            }
        }
    }
    if (dependencyVersions && Object.keys(dependencyVersions).length) {
        const resolvedDependencies = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$64$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$5$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$dependencies$2f$getDependencies$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getDependencies"])(dirname, Object.keys(dependencyVersions));
        for (const [dependency, settings] of Object.entries(dependencyVersions)){
            const resolvedDependency = resolvedDependencies.resolved.get(dependency);
            if (!resolvedDependency) {
                if (!settings.required) {
                    continue;
                }
                throw new Error(`Dependency ${dependency} not found. Please ensure it is installed.`);
            }
            if (settings.version) {
                const settingsVersionToCheck = settings.version.startsWith('>=') ? settings.version.slice(2) : settings.version;
                const versionCompareResult = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$64$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$5$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$dependencies$2f$versionUtils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["compareVersions"])(resolvedDependency.version, settingsVersionToCheck, settings.customVersionParser);
                if (settings.version.startsWith('>=')) {
                    if (versionCompareResult === 'lower') {
                        throw new Error(`Dependency ${dependency} is on version ${resolvedDependency.version}, but ${settings.version} or greater is required. Please update this dependency.`);
                    }
                } else if (versionCompareResult === 'lower' || versionCompareResult === 'greater') {
                    throw new Error(`Dependency ${dependency} is on version ${resolvedDependency.version}, but ${settings.version} is required. Please update this dependency.`);
                }
            }
        }
    }
} //# sourceMappingURL=dependencyChecker.js.map
}),
"[project]/node_modules/.pnpm/payload@3.64.0_graphql@16.12.0_typescript@5.5.2/node_modules/payload/dist/utilities/flattenAllFields.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "flattenAllFields",
    ()=>flattenAllFields,
    "flattenBlock",
    ()=>flattenBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$64$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$5$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.64.0_graphql@16.12.0_typescript@5.5.2/node_modules/payload/dist/fields/config/types.js [app-rsc] (ecmascript)");
;
const flattenBlock = ({ block })=>{
    return {
        ...block,
        flattenedFields: flattenAllFields({
            fields: block.fields
        })
    };
};
const flattenedFieldsCache = new Map();
const flattenAllFields = ({ cache, fields })=>{
    if (cache) {
        const maybeFields = flattenedFieldsCache.get(fields);
        if (maybeFields) {
            return maybeFields;
        }
    }
    const result = [];
    for (const field of fields){
        switch(field.type){
            case 'array':
            case 'group':
                {
                    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$64$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$5$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fieldAffectsData"])(field)) {
                        result.push({
                            ...field,
                            flattenedFields: flattenAllFields({
                                fields: field.fields
                            })
                        });
                    } else {
                        for (const nestedField of flattenAllFields({
                            fields: field.fields
                        })){
                            result.push(nestedField);
                        }
                    }
                    break;
                }
            case 'blocks':
                {
                    const blocks = [];
                    let blockReferences = undefined;
                    if (field.blockReferences) {
                        blockReferences = [];
                        for (const block of field.blockReferences){
                            if (typeof block === 'string') {
                                blockReferences.push(block);
                                continue;
                            }
                            blockReferences.push(flattenBlock({
                                block
                            }));
                        }
                    } else {
                        for (const block of field.blocks){
                            if (typeof block === 'string') {
                                blocks.push(block);
                                continue;
                            }
                            blocks.push(flattenBlock({
                                block
                            }));
                        }
                    }
                    const resultField = {
                        ...field,
                        blockReferences,
                        blocks
                    };
                    result.push(resultField);
                    break;
                }
            case 'collapsible':
            case 'row':
                {
                    for (const nestedField of flattenAllFields({
                        fields: field.fields
                    })){
                        result.push(nestedField);
                    }
                    break;
                }
            case 'join':
                {
                    result.push(field);
                    break;
                }
            case 'tabs':
                {
                    for (const tab of field.tabs){
                        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$64$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$5$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["tabHasName"])(tab)) {
                            for (const nestedField of flattenAllFields({
                                fields: tab.fields
                            })){
                                result.push(nestedField);
                            }
                        } else {
                            result.push({
                                ...tab,
                                type: 'tab',
                                flattenedFields: flattenAllFields({
                                    fields: tab.fields
                                })
                            });
                        }
                    }
                    break;
                }
            default:
                {
                    if (field.type !== 'ui') {
                        result.push(field);
                    }
                }
        }
    }
    flattenedFieldsCache.set(fields, result);
    return result;
}; //# sourceMappingURL=flattenAllFields.js.map
}),
"[project]/node_modules/.pnpm/payload@3.64.0_graphql@16.12.0_typescript@5.5.2/node_modules/payload/dist/utilities/formatLabels.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "formatLabels",
    ()=>formatLabels,
    "formatNames",
    ()=>formatNames,
    "toWords",
    ()=>toWords
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pluralize$40$8$2e$0$2e$0$2f$node_modules$2f$pluralize$2f$pluralize$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pluralize@8.0.0/node_modules/pluralize/pluralize.js [app-rsc] (ecmascript)");
;
const { isPlural, singular } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pluralize$40$8$2e$0$2e$0$2f$node_modules$2f$pluralize$2f$pluralize$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"];
const capitalizeFirstLetter = (string)=>string.charAt(0).toUpperCase() + string.slice(1);
const toWords = (inputString, joinWords = false)=>{
    const notNullString = inputString || '';
    const trimmedString = notNullString.trim();
    const arrayOfStrings = trimmedString.split(/[\s-]/);
    const splitStringsArray = [];
    arrayOfStrings.forEach((tempString)=>{
        if (tempString !== '') {
            const splitWords = tempString.split(/(?=[A-Z])/).join(' ');
            splitStringsArray.push(capitalizeFirstLetter(splitWords));
        }
    });
    return joinWords ? splitStringsArray.join('').replace(/\s/g, '') : splitStringsArray.join(' ');
};
const formatLabels = (slug)=>{
    const words = toWords(slug);
    return isPlural(slug) ? {
        plural: words,
        singular: singular(words)
    } : {
        plural: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pluralize$40$8$2e$0$2e$0$2f$node_modules$2f$pluralize$2f$pluralize$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(words),
        singular: words
    };
};
const formatNames = (slug)=>{
    const words = toWords(slug, true);
    return isPlural(slug) ? {
        plural: words,
        singular: singular(words)
    } : {
        plural: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pluralize$40$8$2e$0$2e$0$2f$node_modules$2f$pluralize$2f$pluralize$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(words),
        singular: words
    };
};
;
 //# sourceMappingURL=formatLabels.js.map
}),
"[project]/node_modules/.pnpm/payload@3.64.0_graphql@16.12.0_typescript@5.5.2/node_modules/payload/dist/utilities/getCollectionIDFieldTypes.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 *  While the default ID is determined by the db adapter, it can still differ for a collection if they
 *  define a custom ID field. This builds a map of collection slugs to their ID field type.
 * @param defaultIDType as defined by the database adapter
 */ __turbopack_context__.s([
    "getCollectionIDFieldTypes",
    ()=>getCollectionIDFieldTypes
]);
function getCollectionIDFieldTypes({ config, defaultIDType }) {
    return config.collections.reduce((acc, collection)=>{
        const customCollectionIdField = collection.fields.find((field)=>'name' in field && field.name === 'id');
        acc[collection.slug] = defaultIDType === 'text' ? 'string' : 'number';
        if (customCollectionIdField) {
            acc[collection.slug] = customCollectionIdField.type === 'number' ? 'number' : 'string';
        }
        return acc;
    }, {});
} //# sourceMappingURL=getCollectionIDFieldTypes.js.map
}),
"[project]/node_modules/.pnpm/payload@3.64.0_graphql@16.12.0_typescript@5.5.2/node_modules/payload/dist/utilities/configToJSONSchema.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "authCollectionToOperationsJSONSchema",
    ()=>authCollectionToOperationsJSONSchema,
    "configToJSONSchema",
    ()=>configToJSONSchema,
    "entityToJSONSchema",
    ()=>entityToJSONSchema,
    "fieldsToJSONSchema",
    ()=>fieldsToJSONSchema,
    "fieldsToSelectJSONSchema",
    ()=>fieldsToSelectJSONSchema,
    "timezonesToJSONSchema",
    ()=>timezonesToJSONSchema,
    "withNullableJSONSchemaType",
    ()=>withNullableJSONSchemaType
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$64$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$5$2e$2$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$MissingEditorProp$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.64.0_graphql@16.12.0_typescript@5.5.2/node_modules/payload/dist/errors/MissingEditorProp.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$64$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$5$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.64.0_graphql@16.12.0_typescript@5.5.2/node_modules/payload/dist/fields/config/types.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$64$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$5$2e$2$2f$node_modules$2f$payload$2f$dist$2f$queues$2f$config$2f$generateJobsJSONSchemas$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.64.0_graphql@16.12.0_typescript@5.5.2/node_modules/payload/dist/queues/config/generateJobsJSONSchemas.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$64$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$5$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$formatLabels$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.64.0_graphql@16.12.0_typescript@5.5.2/node_modules/payload/dist/utilities/formatLabels.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$64$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$5$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$getCollectionIDFieldTypes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.64.0_graphql@16.12.0_typescript@5.5.2/node_modules/payload/dist/utilities/getCollectionIDFieldTypes.js [app-rsc] (ecmascript)");
;
;
;
;
;
const fieldIsRequired = (field)=>{
    const isConditional = Boolean(field?.admin && field?.admin?.condition);
    if (isConditional) {
        return false;
    }
    const isMarkedRequired = 'required' in field && field.required === true;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$64$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$5$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fieldAffectsData"])(field) && isMarkedRequired) {
        return true;
    }
    // if any subfields are required, this field is required
    if ('fields' in field && field.type !== 'array') {
        return field.flattenedFields.some((subField)=>fieldIsRequired(subField));
    }
    return false;
};
function buildOptionEnums(options) {
    return options.map((option)=>{
        if (typeof option === 'object' && 'value' in option) {
            return option.value;
        }
        return option;
    });
}
function generateEntitySchemas(entities) {
    const properties = [
        ...entities
    ].reduce((acc, { slug })=>{
        acc[slug] = {
            $ref: `#/definitions/${slug}`
        };
        return acc;
    }, {});
    return {
        type: 'object',
        additionalProperties: false,
        properties,
        required: Object.keys(properties)
    };
}
function generateEntitySelectSchemas(entities) {
    const properties = [
        ...entities
    ].reduce((acc, { slug })=>{
        acc[slug] = {
            $ref: `#/definitions/${slug}_select`
        };
        return acc;
    }, {});
    return {
        type: 'object',
        additionalProperties: false,
        properties,
        required: Object.keys(properties)
    };
}
function generateCollectionJoinsSchemas(collections) {
    const properties = [
        ...collections
    ].reduce((acc, { slug, joins, polymorphicJoins })=>{
        const schema = {
            type: 'object',
            additionalProperties: false,
            properties: {},
            required: []
        };
        for(const collectionSlug in joins){
            for (const join of joins[collectionSlug]){
                ;
                schema.properties[join.joinPath] = {
                    type: 'string',
                    enum: [
                        collectionSlug
                    ]
                };
                schema.required.push(join.joinPath);
            }
        }
        for (const join of polymorphicJoins){
            ;
            schema.properties[join.joinPath] = {
                type: 'string',
                enum: join.field.collection
            };
            schema.required.push(join.joinPath);
        }
        if (Object.keys(schema.properties).length > 0) {
            acc[slug] = schema;
        }
        return acc;
    }, {});
    return {
        type: 'object',
        additionalProperties: false,
        properties,
        required: Object.keys(properties)
    };
}
function generateLocaleEntitySchemas(localization) {
    if (localization && 'locales' in localization && localization?.locales) {
        const localesFromConfig = localization?.locales;
        const locales = [
            ...localesFromConfig
        ].map((locale)=>{
            return locale.code;
        }, []);
        return {
            type: 'string',
            enum: locales
        };
    }
    return {
        type: 'null'
    };
}
function generateAuthEntitySchemas(entities) {
    const properties = [
        ...entities
    ].filter(({ auth })=>Boolean(auth)).map(({ slug })=>{
        return {
            allOf: [
                {
                    $ref: `#/definitions/${slug}`
                },
                {
                    type: 'object',
                    additionalProperties: false,
                    properties: {
                        collection: {
                            type: 'string',
                            enum: [
                                slug
                            ]
                        }
                    },
                    required: [
                        'collection'
                    ]
                }
            ]
        };
    }, {});
    return {
        oneOf: properties
    };
}
/**
 * Generates the JSON Schema for database configuration
 *
 * @example { db: idType: string }
 */ function generateDbEntitySchema(config) {
    const defaultIDType = config.db?.defaultIDType === 'number' ? {
        type: 'number'
    } : {
        type: 'string'
    };
    return {
        type: 'object',
        additionalProperties: false,
        properties: {
            defaultIDType
        },
        required: [
            'defaultIDType'
        ]
    };
}
function withNullableJSONSchemaType(fieldType, isRequired) {
    const fieldTypes = [
        fieldType
    ];
    if (isRequired) {
        return fieldType;
    }
    fieldTypes.push('null');
    return fieldTypes;
}
function entityOrFieldToJsDocs({ entity, i18n }) {
    let description = undefined;
    if (entity?.admin?.description) {
        if (typeof entity?.admin?.description === 'string') {
            description = entity?.admin?.description;
        } else if (typeof entity?.admin?.description === 'object') {
            if (entity?.admin?.description?.en) {
                description = entity?.admin?.description?.en;
            } else if (entity?.admin?.description?.[i18n.language]) {
                description = entity?.admin?.description?.[i18n.language];
            }
        } else if (typeof entity?.admin?.description === 'function' && i18n) {
        // do not evaluate description functions for generating JSDocs. The output of
        // those can differ depending on where and when they are called, creating
        // inconsistencies in the generated JSDocs.
        }
    }
    return description;
}
function fieldsToJSONSchema(/**
   * Used for relationship fields, to determine whether to use a string or number type for the ID.
   * While there is a default ID field type set by the db adapter, they can differ on a collection-level
   * if they have custom ID fields.
   */ collectionIDFieldTypes, fields, /**
   * Allows you to define new top-level interfaces that can be re-used in the output schema.
   */ interfaceNameDefinitions, config, i18n) {
    const requiredFieldNames = new Set();
    return {
        properties: Object.fromEntries(fields.reduce((fieldSchemas, field, index)=>{
            const isRequired = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$64$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$5$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fieldAffectsData"])(field) && fieldIsRequired(field);
            const fieldDescription = entityOrFieldToJsDocs({
                entity: field,
                i18n
            });
            const baseFieldSchema = {};
            if (fieldDescription) {
                baseFieldSchema.description = fieldDescription;
            }
            let fieldSchema;
            switch(field.type){
                case 'array':
                    {
                        fieldSchema = {
                            ...baseFieldSchema,
                            type: withNullableJSONSchemaType('array', isRequired),
                            items: {
                                type: 'object',
                                additionalProperties: false,
                                ...fieldsToJSONSchema(collectionIDFieldTypes, field.flattenedFields, interfaceNameDefinitions, config, i18n)
                            }
                        };
                        if (field.interfaceName) {
                            interfaceNameDefinitions.set(field.interfaceName, fieldSchema);
                            fieldSchema = {
                                $ref: `#/definitions/${field.interfaceName}`
                            };
                        }
                        break;
                    }
                case 'blocks':
                    {
                        // Check for a case where no blocks are provided.
                        // We need to generate an empty array for this case, note that JSON schema 4 doesn't support empty arrays
                        // so the best we can get is `unknown[]`
                        const hasBlocks = Boolean(field.blockReferences ? field.blockReferences.length : field.blocks.length);
                        fieldSchema = {
                            ...baseFieldSchema,
                            type: withNullableJSONSchemaType('array', isRequired),
                            items: hasBlocks ? {
                                oneOf: (field.blockReferences ?? field.blocks).map((block)=>{
                                    if (typeof block === 'string') {
                                        const resolvedBlock = config?.blocks?.find((b)=>b.slug === block);
                                        return {
                                            $ref: `#/definitions/${resolvedBlock.interfaceName ?? resolvedBlock.slug}`
                                        };
                                    }
                                    const blockFieldSchemas = fieldsToJSONSchema(collectionIDFieldTypes, block.flattenedFields, interfaceNameDefinitions, config, i18n);
                                    const blockSchema = {
                                        type: 'object',
                                        additionalProperties: false,
                                        properties: {
                                            ...blockFieldSchemas.properties,
                                            blockType: {
                                                const: block.slug
                                            }
                                        },
                                        required: [
                                            'blockType',
                                            ...blockFieldSchemas.required
                                        ]
                                    };
                                    if (block.interfaceName) {
                                        interfaceNameDefinitions.set(block.interfaceName, blockSchema);
                                        return {
                                            $ref: `#/definitions/${block.interfaceName}`
                                        };
                                    }
                                    return blockSchema;
                                })
                            } : {}
                        };
                        break;
                    }
                case 'checkbox':
                    {
                        fieldSchema = {
                            ...baseFieldSchema,
                            type: withNullableJSONSchemaType('boolean', isRequired)
                        };
                        break;
                    }
                case 'code':
                case 'date':
                case 'email':
                case 'textarea':
                    {
                        fieldSchema = {
                            ...baseFieldSchema,
                            type: withNullableJSONSchemaType('string', isRequired)
                        };
                        break;
                    }
                case 'group':
                    {
                        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$64$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$5$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fieldAffectsData"])(field)) {
                            fieldSchema = {
                                ...baseFieldSchema,
                                type: 'object',
                                additionalProperties: false,
                                ...fieldsToJSONSchema(collectionIDFieldTypes, field.flattenedFields, interfaceNameDefinitions, config, i18n)
                            };
                            if (field.interfaceName) {
                                interfaceNameDefinitions.set(field.interfaceName, fieldSchema);
                                fieldSchema = {
                                    $ref: `#/definitions/${field.interfaceName}`
                                };
                            }
                        }
                        break;
                    }
                case 'join':
                    {
                        let items;
                        if (Array.isArray(field.collection)) {
                            items = {
                                oneOf: field.collection.map((collection)=>({
                                        type: 'object',
                                        additionalProperties: false,
                                        properties: {
                                            relationTo: {
                                                const: collection
                                            },
                                            value: {
                                                oneOf: [
                                                    {
                                                        type: collectionIDFieldTypes[collection]
                                                    },
                                                    {
                                                        $ref: `#/definitions/${collection}`
                                                    }
                                                ]
                                            }
                                        },
                                        required: [
                                            'collectionSlug',
                                            'value'
                                        ]
                                    }))
                            };
                        } else {
                            items = {
                                oneOf: [
                                    {
                                        type: collectionIDFieldTypes[field.collection]
                                    },
                                    {
                                        $ref: `#/definitions/${field.collection}`
                                    }
                                ]
                            };
                        }
                        fieldSchema = {
                            ...baseFieldSchema,
                            type: 'object',
                            additionalProperties: false,
                            properties: {
                                docs: {
                                    type: 'array',
                                    items
                                },
                                hasNextPage: {
                                    type: 'boolean'
                                },
                                totalDocs: {
                                    type: 'number'
                                }
                            }
                        };
                        break;
                    }
                case 'json':
                    {
                        fieldSchema = field.jsonSchema?.schema || {
                            ...baseFieldSchema,
                            type: [
                                'object',
                                'array',
                                'string',
                                'number',
                                'boolean',
                                'null'
                            ]
                        };
                        break;
                    }
                case 'number':
                    {
                        if (field.hasMany === true) {
                            fieldSchema = {
                                ...baseFieldSchema,
                                type: withNullableJSONSchemaType('array', isRequired),
                                items: {
                                    type: 'number'
                                }
                            };
                        } else {
                            fieldSchema = {
                                ...baseFieldSchema,
                                type: withNullableJSONSchemaType('number', isRequired)
                            };
                        }
                        break;
                    }
                case 'point':
                    {
                        fieldSchema = {
                            ...baseFieldSchema,
                            type: withNullableJSONSchemaType('array', isRequired),
                            items: [
                                {
                                    type: 'number'
                                },
                                {
                                    type: 'number'
                                }
                            ],
                            maxItems: 2,
                            minItems: 2
                        };
                        break;
                    }
                case 'radio':
                    {
                        fieldSchema = {
                            ...baseFieldSchema,
                            type: withNullableJSONSchemaType('string', isRequired),
                            enum: buildOptionEnums(field.options)
                        };
                        if (field.interfaceName) {
                            interfaceNameDefinitions.set(field.interfaceName, fieldSchema);
                            fieldSchema = {
                                $ref: `#/definitions/${field.interfaceName}`
                            };
                        }
                        break;
                    }
                case 'relationship':
                case 'upload':
                    {
                        if (Array.isArray(field.relationTo)) {
                            if (field.hasMany) {
                                fieldSchema = {
                                    ...baseFieldSchema,
                                    type: withNullableJSONSchemaType('array', isRequired),
                                    items: {
                                        oneOf: field.relationTo.map((relation)=>{
                                            return {
                                                type: 'object',
                                                additionalProperties: false,
                                                properties: {
                                                    relationTo: {
                                                        const: relation
                                                    },
                                                    value: {
                                                        oneOf: [
                                                            {
                                                                type: collectionIDFieldTypes[relation]
                                                            },
                                                            {
                                                                $ref: `#/definitions/${relation}`
                                                            }
                                                        ]
                                                    }
                                                },
                                                required: [
                                                    'value',
                                                    'relationTo'
                                                ]
                                            };
                                        })
                                    }
                                };
                            } else {
                                fieldSchema = {
                                    ...baseFieldSchema,
                                    oneOf: field.relationTo.map((relation)=>{
                                        return {
                                            type: withNullableJSONSchemaType('object', isRequired),
                                            additionalProperties: false,
                                            properties: {
                                                relationTo: {
                                                    const: relation
                                                },
                                                value: {
                                                    oneOf: [
                                                        {
                                                            type: collectionIDFieldTypes[relation]
                                                        },
                                                        {
                                                            $ref: `#/definitions/${relation}`
                                                        }
                                                    ]
                                                }
                                            },
                                            required: [
                                                'value',
                                                'relationTo'
                                            ]
                                        };
                                    })
                                };
                            }
                        } else if (field.hasMany) {
                            fieldSchema = {
                                ...baseFieldSchema,
                                type: withNullableJSONSchemaType('array', isRequired),
                                items: {
                                    oneOf: [
                                        {
                                            type: collectionIDFieldTypes[field.relationTo]
                                        },
                                        {
                                            $ref: `#/definitions/${field.relationTo}`
                                        }
                                    ]
                                }
                            };
                        } else {
                            fieldSchema = {
                                ...baseFieldSchema,
                                oneOf: [
                                    {
                                        type: withNullableJSONSchemaType(collectionIDFieldTypes[field.relationTo], isRequired)
                                    },
                                    {
                                        $ref: `#/definitions/${field.relationTo}`
                                    }
                                ]
                            };
                        }
                        break;
                    }
                case 'richText':
                    {
                        if (!field?.editor) {
                            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$64$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$5$2e$2$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$MissingEditorProp$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MissingEditorProp"](field) // while we allow disabling editor functionality, you should not have any richText fields defined if you do not have an editor
                            ;
                        }
                        if (typeof field.editor === 'function') {
                            throw new Error('Attempted to access unsanitized rich text editor.');
                        }
                        if (field.editor.outputSchema) {
                            fieldSchema = {
                                ...baseFieldSchema,
                                ...field.editor.outputSchema({
                                    collectionIDFieldTypes,
                                    config,
                                    field,
                                    i18n,
                                    interfaceNameDefinitions,
                                    isRequired
                                })
                            };
                        } else {
                            // Maintain backwards compatibility with existing rich text editors
                            fieldSchema = {
                                ...baseFieldSchema,
                                type: withNullableJSONSchemaType('array', isRequired),
                                items: {
                                    type: 'object'
                                }
                            };
                        }
                        break;
                    }
                case 'select':
                    {
                        const optionEnums = buildOptionEnums(field.options);
                        // We get the previous field to check for a date in the case of a timezone select
                        // This works because timezone selects are always inserted right after a date with 'timezone: true'
                        const previousField = fields?.[index - 1];
                        const isTimezoneField = previousField?.type === 'date' && previousField.timezone && field.name.includes('_tz');
                        // Timezone selects should reference the supportedTimezones definition
                        if (isTimezoneField) {
                            fieldSchema = {
                                $ref: `#/definitions/supportedTimezones`
                            };
                        } else {
                            if (field.hasMany) {
                                fieldSchema = {
                                    ...baseFieldSchema,
                                    type: withNullableJSONSchemaType('array', isRequired),
                                    items: {
                                        type: 'string'
                                    }
                                };
                                if (optionEnums?.length) {
                                    ;
                                    fieldSchema.items.enum = optionEnums;
                                }
                            } else {
                                fieldSchema = {
                                    ...baseFieldSchema,
                                    type: withNullableJSONSchemaType('string', isRequired)
                                };
                                if (optionEnums?.length) {
                                    fieldSchema.enum = optionEnums;
                                }
                            }
                            if (field.interfaceName) {
                                interfaceNameDefinitions.set(field.interfaceName, fieldSchema);
                                fieldSchema = {
                                    $ref: `#/definitions/${field.interfaceName}`
                                };
                            }
                            break;
                        }
                        break;
                    }
                case 'tab':
                    {
                        fieldSchema = {
                            ...baseFieldSchema,
                            type: 'object',
                            additionalProperties: false,
                            ...fieldsToJSONSchema(collectionIDFieldTypes, field.flattenedFields, interfaceNameDefinitions, config, i18n)
                        };
                        if (field.interfaceName) {
                            interfaceNameDefinitions.set(field.interfaceName, fieldSchema);
                            fieldSchema = {
                                $ref: `#/definitions/${field.interfaceName}`
                            };
                        }
                        break;
                    }
                case 'text':
                    if (field.hasMany === true) {
                        fieldSchema = {
                            ...baseFieldSchema,
                            type: withNullableJSONSchemaType('array', isRequired),
                            items: {
                                type: 'string'
                            }
                        };
                    } else {
                        fieldSchema = {
                            ...baseFieldSchema,
                            type: withNullableJSONSchemaType('string', isRequired)
                        };
                    }
                    break;
                default:
                    {
                        break;
                    }
            }
            if ('typescriptSchema' in field && field?.typescriptSchema?.length) {
                for (const schema of field.typescriptSchema){
                    fieldSchema = schema({
                        jsonSchema: fieldSchema
                    });
                }
            }
            if (fieldSchema && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$64$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$5$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fieldAffectsData"])(field)) {
                if (isRequired && fieldSchema.required !== false) {
                    requiredFieldNames.add(field.name);
                }
                fieldSchemas.set(field.name, fieldSchema);
            }
            return fieldSchemas;
        }, new Map())),
        required: Array.from(requiredFieldNames)
    };
}
function entityToJSONSchema(config, entity, interfaceNameDefinitions, defaultIDType, collectionIDFieldTypes, i18n) {
    if (!collectionIDFieldTypes) {
        collectionIDFieldTypes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$64$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$5$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$getCollectionIDFieldTypes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCollectionIDFieldTypes"])({
            config,
            defaultIDType
        });
    }
    const title = entity.typescript?.interface ? entity.typescript.interface : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$64$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$5$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$formatLabels$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatNames"])(entity.slug).singular;
    let mutableFields = [
        ...entity.flattenedFields
    ];
    const idField = {
        name: 'id',
        type: defaultIDType,
        required: true
    };
    const customIdField = mutableFields.find((field)=>field.name === 'id');
    if (customIdField && customIdField.type !== 'group' && customIdField.type !== 'tab') {
        mutableFields = mutableFields.map((field)=>{
            if (field === customIdField) {
                return {
                    ...field,
                    required: true
                };
            }
            return field;
        });
    } else {
        mutableFields.unshift(idField);
    }
    // mark timestamp fields required
    if ('timestamps' in entity && entity.timestamps !== false) {
        mutableFields = mutableFields.map((field)=>{
            if (field.name === 'createdAt' || field.name === 'updatedAt') {
                return {
                    ...field,
                    required: true
                };
            }
            return field;
        });
    }
    if ('auth' in entity && entity.auth && (!entity.auth?.disableLocalStrategy || typeof entity.auth?.disableLocalStrategy === 'object' && entity.auth.disableLocalStrategy.enableFields)) {
        mutableFields.push({
            name: 'password',
            type: 'text'
        });
    }
    const jsonSchema = {
        type: 'object',
        additionalProperties: false,
        title,
        ...fieldsToJSONSchema(collectionIDFieldTypes, mutableFields, interfaceNameDefinitions, config, i18n)
    };
    const entityDescription = entityOrFieldToJsDocs({
        entity,
        i18n
    });
    if (entityDescription) {
        jsonSchema.description = entityDescription;
    }
    return jsonSchema;
}
function fieldsToSelectJSONSchema({ config, fields, interfaceNameDefinitions }) {
    const schema = {
        type: 'object',
        additionalProperties: false,
        properties: {}
    };
    for (const field of fields){
        switch(field.type){
            case 'array':
            case 'group':
            case 'tab':
                {
                    let fieldSchema = fieldsToSelectJSONSchema({
                        config,
                        fields: field.flattenedFields,
                        interfaceNameDefinitions
                    });
                    if (field.interfaceName) {
                        const definition = `${field.interfaceName}_select`;
                        interfaceNameDefinitions.set(definition, fieldSchema);
                        fieldSchema = {
                            $ref: `#/definitions/${definition}`
                        };
                    }
                    schema.properties[field.name] = {
                        oneOf: [
                            {
                                type: 'boolean'
                            },
                            fieldSchema
                        ]
                    };
                    break;
                }
            case 'blocks':
                {
                    const blocksSchema = {
                        type: 'object',
                        additionalProperties: false,
                        properties: {}
                    };
                    for (const block of field.blockReferences ?? field.blocks){
                        if (typeof block === 'string') {
                            continue; // TODO
                        }
                        let blockSchema = fieldsToSelectJSONSchema({
                            config,
                            fields: block.flattenedFields,
                            interfaceNameDefinitions
                        });
                        if (block.interfaceName) {
                            const definition = `${block.interfaceName}_select`;
                            interfaceNameDefinitions.set(definition, blockSchema);
                            blockSchema = {
                                $ref: `#/definitions/${definition}`
                            };
                        }
                        blocksSchema.properties[block.slug] = {
                            oneOf: [
                                {
                                    type: 'boolean'
                                },
                                blockSchema
                            ]
                        };
                    }
                    schema.properties[field.name] = {
                        oneOf: [
                            {
                                type: 'boolean'
                            },
                            blocksSchema
                        ]
                    };
                    break;
                }
            default:
                schema.properties[field.name] = {
                    type: 'boolean'
                };
                break;
        }
    }
    return schema;
}
const fieldType = {
    type: 'string',
    required: false
};
const generateAuthFieldTypes = ({ type, loginWithUsername })=>{
    if (loginWithUsername) {
        switch(type){
            case 'forgotOrUnlock':
                {
                    if (loginWithUsername.allowEmailLogin) {
                        // allow email or username for unlock/forgot-password
                        return {
                            additionalProperties: false,
                            oneOf: [
                                {
                                    additionalProperties: false,
                                    properties: {
                                        email: fieldType
                                    },
                                    required: [
                                        'email'
                                    ]
                                },
                                {
                                    additionalProperties: false,
                                    properties: {
                                        username: fieldType
                                    },
                                    required: [
                                        'username'
                                    ]
                                }
                            ]
                        };
                    } else {
                        // allow only username for unlock/forgot-password
                        return {
                            additionalProperties: false,
                            properties: {
                                username: fieldType
                            },
                            required: [
                                'username'
                            ]
                        };
                    }
                }
            case 'login':
                {
                    if (loginWithUsername.allowEmailLogin) {
                        // allow username or email and require password for login
                        return {
                            additionalProperties: false,
                            oneOf: [
                                {
                                    additionalProperties: false,
                                    properties: {
                                        email: fieldType,
                                        password: fieldType
                                    },
                                    required: [
                                        'email',
                                        'password'
                                    ]
                                },
                                {
                                    additionalProperties: false,
                                    properties: {
                                        password: fieldType,
                                        username: fieldType
                                    },
                                    required: [
                                        'username',
                                        'password'
                                    ]
                                }
                            ]
                        };
                    } else {
                        // allow only username and password for login
                        return {
                            additionalProperties: false,
                            properties: {
                                password: fieldType,
                                username: fieldType
                            },
                            required: [
                                'username',
                                'password'
                            ]
                        };
                    }
                }
            case 'register':
                {
                    const requiredFields = [
                        'password'
                    ];
                    const properties = {
                        password: fieldType,
                        username: fieldType
                    };
                    if (loginWithUsername.requireEmail) {
                        requiredFields.push('email');
                    }
                    if (loginWithUsername.requireUsername) {
                        requiredFields.push('username');
                    }
                    if (loginWithUsername.requireEmail || loginWithUsername.allowEmailLogin) {
                        properties.email = fieldType;
                    }
                    return {
                        additionalProperties: false,
                        properties,
                        required: requiredFields
                    };
                }
        }
    }
    // default email (and password for login/register)
    return {
        additionalProperties: false,
        properties: {
            email: fieldType,
            password: fieldType
        },
        required: [
            'email',
            'password'
        ]
    };
};
function authCollectionToOperationsJSONSchema(config) {
    const loginWithUsername = config.auth?.loginWithUsername;
    const loginUserFields = generateAuthFieldTypes({
        type: 'login',
        loginWithUsername
    });
    const forgotOrUnlockUserFields = generateAuthFieldTypes({
        type: 'forgotOrUnlock',
        loginWithUsername
    });
    const registerUserFields = generateAuthFieldTypes({
        type: 'register',
        loginWithUsername
    });
    const properties = {
        forgotPassword: forgotOrUnlockUserFields,
        login: loginUserFields,
        registerFirstUser: registerUserFields,
        unlock: forgotOrUnlockUserFields
    };
    return {
        type: 'object',
        additionalProperties: false,
        properties,
        required: Object.keys(properties),
        title: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$64$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$5$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$formatLabels$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatNames"])(config.slug).singular}AuthOperations`
    };
}
function timezonesToJSONSchema(supportedTimezones) {
    return {
        description: 'Supported timezones in IANA format.',
        enum: supportedTimezones.map((timezone)=>typeof timezone === 'string' ? timezone : timezone.value)
    };
}
function generateAuthOperationSchemas(collections) {
    const properties = collections.reduce((acc, collection)=>{
        if (collection.auth) {
            acc[collection.slug] = {
                $ref: `#/definitions/auth/${collection.slug}`
            };
        }
        return acc;
    }, {});
    return {
        type: 'object',
        additionalProperties: false,
        properties,
        required: Object.keys(properties)
    };
}
function configToJSONSchema(config, defaultIDType, i18n) {
    // a mutable Map to store custom top-level `interfaceName` types. Fields with an `interfaceName` property will be moved to the top-level definitions here
    const interfaceNameDefinitions = new Map();
    //  Used for relationship fields, to determine whether to use a string or number type for the ID.
    const collectionIDFieldTypes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$64$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$5$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$getCollectionIDFieldTypes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCollectionIDFieldTypes"])({
        config,
        defaultIDType: defaultIDType
    });
    // Collections and Globals have to be moved to the top-level definitions as well. Reason: The top-level type will be the `Config` type - we don't want all collection and global
    // types to be inlined inside the `Config` type
    const entities = [
        ...config.globals.map((global)=>({
                type: 'global',
                entity: global
            })),
        ...config.collections.map((collection)=>({
                type: 'collection',
                entity: collection
            }))
    ];
    const entityDefinitions = entities.reduce((acc, { type, entity })=>{
        acc[entity.slug] = entityToJSONSchema(config, entity, interfaceNameDefinitions, defaultIDType, collectionIDFieldTypes, i18n);
        const select = fieldsToSelectJSONSchema({
            config,
            fields: entity.flattenedFields,
            interfaceNameDefinitions
        });
        if (type === 'global') {
            select.properties.globalType = {
                type: 'boolean'
            };
        }
        acc[`${entity.slug}_select`] = {
            type: 'object',
            additionalProperties: false,
            ...select
        };
        return acc;
    }, {});
    const timezoneDefinitions = timezonesToJSONSchema(config.admin.timezones.supportedTimezones);
    const authOperationDefinitions = [
        ...config.collections
    ].filter(({ auth })=>Boolean(auth)).reduce((acc, authCollection)=>{
        acc.auth[authCollection.slug] = authCollectionToOperationsJSONSchema(authCollection);
        return acc;
    }, {
        auth: {}
    });
    const jobsSchemas = config.jobs ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$64$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$5$2e$2$2f$node_modules$2f$payload$2f$dist$2f$queues$2f$config$2f$generateJobsJSONSchemas$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generateJobsJSONSchemas"])(config, config.jobs, interfaceNameDefinitions, collectionIDFieldTypes, i18n) : {};
    const blocksDefinition = {
        type: 'object',
        additionalProperties: false,
        properties: {},
        required: []
    };
    if (config?.blocks?.length) {
        for (const block of config.blocks){
            const blockFieldSchemas = fieldsToJSONSchema(collectionIDFieldTypes, block.flattenedFields, interfaceNameDefinitions, config, i18n);
            const blockSchema = {
                type: 'object',
                additionalProperties: false,
                properties: {
                    ...blockFieldSchemas.properties,
                    blockType: {
                        const: block.slug
                    }
                },
                required: [
                    'blockType',
                    ...blockFieldSchemas.required
                ]
            };
            const interfaceName = block.interfaceName ?? block.slug;
            interfaceNameDefinitions.set(interfaceName, blockSchema);
            blocksDefinition.properties[block.slug] = {
                $ref: `#/definitions/${interfaceName}`
            };
            blocksDefinition.required.push(block.slug);
        }
    }
    let jsonSchema = {
        additionalProperties: false,
        definitions: {
            supportedTimezones: timezoneDefinitions,
            ...entityDefinitions,
            ...Object.fromEntries(interfaceNameDefinitions),
            ...authOperationDefinitions
        },
        // These properties here will be very simple, as all the complexity is in the definitions. These are just the properties for the top-level `Config` type
        type: 'object',
        properties: {
            auth: generateAuthOperationSchemas(config.collections),
            blocks: blocksDefinition,
            collections: generateEntitySchemas(config.collections || []),
            collectionsJoins: generateCollectionJoinsSchemas(config.collections || []),
            collectionsSelect: generateEntitySelectSchemas(config.collections || []),
            db: generateDbEntitySchema(config),
            globals: generateEntitySchemas(config.globals || []),
            globalsSelect: generateEntitySelectSchemas(config.globals || []),
            locale: generateLocaleEntitySchemas(config.localization),
            user: generateAuthEntitySchemas(config.collections)
        },
        required: [
            'user',
            'locale',
            'collections',
            'collectionsSelect',
            'collectionsJoins',
            'globalsSelect',
            'globals',
            'auth',
            'db',
            'jobs',
            'blocks'
        ],
        title: 'Config'
    };
    if (jobsSchemas.definitions?.size) {
        for (const [key, value] of jobsSchemas.definitions){
            jsonSchema.definitions[key] = value;
        }
    }
    if (jobsSchemas.properties) {
        jsonSchema.properties.jobs = {
            type: 'object',
            additionalProperties: false,
            properties: jobsSchemas.properties,
            required: [
                'tasks',
                'workflows'
            ]
        };
    }
    if (config?.typescript?.schema?.length) {
        for (const schema of config.typescript.schema){
            jsonSchema = schema({
                collectionIDFieldTypes,
                config,
                i18n: i18n,
                jsonSchema
            });
        }
    }
    return jsonSchema;
} //# sourceMappingURL=configToJSONSchema.js.map
}),
"[project]/node_modules/.pnpm/payload@3.64.0_graphql@16.12.0_typescript@5.5.2/node_modules/payload/dist/utilities/sanitizeFallbackLocale.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Sanitizes fallbackLocale based on a provided fallbackLocale, locale and localization config
 *
 * Handles the following scenarios:
 * - determines if a fallback locale should be used
 * - determines if a locale specific fallback should be used in place of the default locale
 * - sets the fallbackLocale to 'null' if no fallback locale should be used
 */ __turbopack_context__.s([
    "sanitizeFallbackLocale",
    ()=>sanitizeFallbackLocale
]);
const sanitizeFallbackLocale = ({ fallbackLocale, locale, localization })=>{
    let hasFallbackLocale = false;
    if (fallbackLocale === undefined || fallbackLocale === null) {
        hasFallbackLocale = Boolean(localization && localization.fallback);
    }
    if (fallbackLocale && (Array.isArray(fallbackLocale) || ![
        'false',
        'none',
        'null'
    ].includes(fallbackLocale))) {
        hasFallbackLocale = true;
    }
    if (hasFallbackLocale) {
        if (!fallbackLocale) {
            // Check for locale specific fallback
            const localeSpecificFallback = localization && localization?.locales?.length ? localization.locales.find((localeConfig)=>localeConfig.code === locale)?.fallbackLocale : undefined;
            if (localeSpecificFallback) {
                fallbackLocale = localeSpecificFallback;
            } else {
                // Use defaultLocale as fallback otherwise
                if (localization && 'fallback' in localization && localization.fallback) {
                    fallbackLocale = localization.defaultLocale;
                }
            }
        }
    } else {
        fallbackLocale = null;
    }
    return fallbackLocale;
}; //# sourceMappingURL=sanitizeFallbackLocale.js.map
}),
"[project]/node_modules/.pnpm/payload@3.64.0_graphql@16.12.0_typescript@5.5.2/node_modules/payload/dist/utilities/createLocalReq.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createLocalReq",
    ()=>createLocalReq
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$64$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$5$2e$2$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$dataloader$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.64.0_graphql@16.12.0_typescript@5.5.2/node_modules/payload/dist/collections/dataloader.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$64$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$5$2e$2$2f$node_modules$2f$payload$2f$dist$2f$translations$2f$getLocalI18n$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.64.0_graphql@16.12.0_typescript@5.5.2/node_modules/payload/dist/translations/getLocalI18n.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$64$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$5$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$sanitizeFallbackLocale$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.64.0_graphql@16.12.0_typescript@5.5.2/node_modules/payload/dist/utilities/sanitizeFallbackLocale.js [app-rsc] (ecmascript)");
;
;
;
function getRequestContext(req = {
    context: null
}, context = {}) {
    if (req.context) {
        if (Object.keys(req.context).length === 0 && req.context.constructor === Object) {
            // if req.context is `{}` avoid unnecessary spread
            return context;
        } else {
            return {
                ...req.context,
                ...context
            };
        }
    } else {
        return context;
    }
}
const attachFakeURLProperties = (req, urlSuffix)=>{
    /**
   * *NOTE*
   * If no URL is provided, the local API was called outside
   * the context of a request. Therefore we create a fake URL object.
   * `ts-expect-error` is used below for properties that are 'read-only'.
   * Since they do not exist yet we can safely ignore the error.
   */ let urlObject;
    function getURLObject() {
        if (urlObject) {
            return urlObject;
        }
        const fallbackURL = `http://${req.host || 'localhost'}${urlSuffix || ''}`;
        const urlToUse = req?.url || req.payload?.config?.serverURL ? `${req.payload?.config.serverURL}${urlSuffix || ''}` : fallbackURL;
        try {
            urlObject = new URL(urlToUse);
        } catch (_err) {
            req.payload?.logger.error(`Failed to create URL object from URL: ${urlToUse}, falling back to ${fallbackURL}`);
            urlObject = new URL(fallbackURL);
        }
        return urlObject;
    }
    if (!req.host) {
        req.host = getURLObject().host;
    }
    if (!req.protocol) {
        req.protocol = getURLObject().protocol;
    }
    if (!req.pathname) {
        req.pathname = getURLObject().pathname;
    }
    if (!req.searchParams) {
        // @ts-expect-error eslint-disable-next-line no-param-reassign
        req.searchParams = getURLObject().searchParams;
    }
    if (!req.origin) {
        // @ts-expect-error eslint-disable-next-line no-param-reassign
        req.origin = getURLObject().origin;
    }
    if (!req?.url) {
        // @ts-expect-error eslint-disable-next-line no-param-reassign
        req.url = getURLObject().href;
    }
};
const createLocalReq = async ({ context, fallbackLocale, locale: localeArg, req = {}, urlSuffix, user }, payload)=>{
    const localization = payload.config?.localization;
    if (localization) {
        const locale = localeArg === '*' ? 'all' : localeArg;
        const defaultLocale = localization.defaultLocale;
        const localeCandidate = locale || req?.locale || req?.query?.locale;
        req.locale = localeCandidate && typeof localeCandidate === 'string' ? localeCandidate : defaultLocale;
        const sanitizedFallback = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$64$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$5$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$sanitizeFallbackLocale$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sanitizeFallbackLocale"])({
            fallbackLocale: fallbackLocale,
            locale: req.locale,
            localization
        });
        req.fallbackLocale = sanitizedFallback;
    }
    const i18n = req?.i18n || await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$64$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$5$2e$2$2f$node_modules$2f$payload$2f$dist$2f$translations$2f$getLocalI18n$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getLocalI18n"])({
        config: payload.config,
        language: payload.config.i18n.fallbackLanguage
    });
    if (!req.headers) {
        req.headers = new Headers();
    }
    req.context = getRequestContext(req, context);
    req.payloadAPI = req?.payloadAPI || 'local';
    req.payload = payload;
    req.i18n = i18n;
    req.t = i18n.t;
    req.user = user || req?.user || null;
    req.payloadDataLoader = req?.payloadDataLoader || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$64$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$5$2e$2$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$dataloader$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getDataLoader"])(req);
    req.routeParams = req?.routeParams || {};
    req.query = req?.query || {};
    attachFakeURLProperties(req, urlSuffix);
    return req;
}; //# sourceMappingURL=createLocalReq.js.map
}),
"[project]/node_modules/.pnpm/payload@3.64.0_graphql@16.12.0_typescript@5.5.2/node_modules/payload/dist/utilities/getFieldByPath.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Get the field from by its path.
 * Can accept nested paths, e.g: group.title, array.group.title
 * If there were any localized on the path, pathHasLocalized will be true and localizedPath will look like:
 * group.<locale>.title // group is localized here
 */ __turbopack_context__.s([
    "getFieldByPath",
    ()=>getFieldByPath
]);
const getFieldByPath = ({ config, fields, includeRelationships = false, localizedPath = '', path })=>{
    let currentFields = fields;
    let currentField = null;
    const segments = path.split('.');
    let pathHasLocalized = false;
    while(segments.length > 0){
        const segment = segments.shift();
        localizedPath = `${localizedPath ? `${localizedPath}.` : ''}${segment}`;
        const field = currentFields.find((each)=>each.name === segment);
        if (!field) {
            return null;
        }
        if (field.localized) {
            pathHasLocalized = true;
            localizedPath = `${localizedPath}.<locale>`;
        }
        if ('flattenedFields' in field) {
            currentFields = field.flattenedFields;
        }
        if (config && includeRelationships && (field.type === 'relationship' || field.type === 'upload') && !Array.isArray(field.relationTo)) {
            const flattenedFields = config.collections.find((e)=>e.slug === field.relationTo)?.flattenedFields;
            if (flattenedFields) {
                currentFields = flattenedFields;
            }
            if (segments.length === 1 && segments[0] === 'id') {
                return {
                    field,
                    localizedPath,
                    pathHasLocalized
                };
            }
        }
        if ('blocks' in field) {
            for (const block of field.blocks){
                const maybeField = getFieldByPath({
                    config,
                    fields: block.flattenedFields,
                    includeRelationships,
                    localizedPath,
                    path: [
                        ...segments
                    ].join('.')
                });
                if (maybeField) {
                    return maybeField;
                }
            }
        }
        currentField = field;
    }
    if (!currentField) {
        return null;
    }
    return {
        field: currentField,
        localizedPath,
        pathHasLocalized
    };
}; //# sourceMappingURL=getFieldByPath.js.map
}),
"[project]/node_modules/.pnpm/payload@3.64.0_graphql@16.12.0_typescript@5.5.2/node_modules/payload/dist/utilities/addDataAndFileToRequest.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addDataAndFileToRequest",
    ()=>addDataAndFileToRequest
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$64$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$5$2e$2$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.64.0_graphql@16.12.0_typescript@5.5.2/node_modules/payload/dist/errors/APIError.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$64$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$5$2e$2$2f$node_modules$2f$payload$2f$dist$2f$uploads$2f$fetchAPI$2d$multipart$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.64.0_graphql@16.12.0_typescript@5.5.2/node_modules/payload/dist/uploads/fetchAPI-multipart/index.js [app-rsc] (ecmascript)");
;
;
const addDataAndFileToRequest = async (req)=>{
    const { body, headers, method, payload } = req;
    if (method && [
        'PATCH',
        'POST',
        'PUT'
    ].includes(method.toUpperCase()) && body) {
        const [contentType] = (headers.get('Content-Type') || '').split(';', 1);
        const bodyByteSize = parseInt(req.headers.get('Content-Length') || '0', 10);
        if (contentType === 'application/json') {
            let data = {};
            try {
                const text = await req.text?.();
                data = text ? JSON.parse(text) : {};
            } catch (error) {
                req.payload.logger.error(error);
            } finally{
                req.data = data;
                // @ts-expect-error attach json method to request
                req.json = ()=>Promise.resolve(data);
            }
        } else if (bodyByteSize && contentType?.includes('multipart/')) {
            const { error, fields, files } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$64$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$5$2e$2$2f$node_modules$2f$payload$2f$dist$2f$uploads$2f$fetchAPI$2d$multipart$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["processMultipartFormdata"])({
                options: {
                    ...payload.config.bodyParser || {},
                    ...payload.config.upload || {}
                },
                request: req
            });
            if (error) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$64$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$5$2e$2$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APIError"](error.message);
            }
            if (files?.file) {
                req.file = files.file;
            }
            if (fields?._payload && typeof fields._payload === 'string') {
                req.data = JSON.parse(fields._payload);
            }
            if (!req.file && fields?.file && typeof fields?.file === 'string') {
                const { clientUploadContext, collectionSlug, filename, mimeType, size } = JSON.parse(fields.file);
                const uploadConfig = req.payload.collections[collectionSlug].config.upload;
                if (!uploadConfig.handlers) {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$64$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$5$2e$2$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APIError"]('uploadConfig.handlers is not present for ' + collectionSlug);
                }
                let response = null;
                let error;
                for (const handler of uploadConfig.handlers){
                    try {
                        const result = await handler(req, {
                            doc: null,
                            params: {
                                clientUploadContext,
                                collection: collectionSlug,
                                filename
                            }
                        });
                        if (result) {
                            response = result;
                        }
                    // If we couldn't get the file from that handler, save the error and try other.
                    } catch (err) {
                        error = err;
                    }
                }
                if (!response) {
                    if (error) {
                        payload.logger.error(error);
                    }
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$64$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$5$2e$2$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APIError"]('Expected response from the upload handler.');
                }
                req.file = {
                    name: filename,
                    clientUploadContext,
                    data: Buffer.from(await response.arrayBuffer()),
                    mimetype: response.headers.get('Content-Type') || mimeType,
                    size
                };
            }
        }
    }
}; //# sourceMappingURL=addDataAndFileToRequest.js.map
}),
"[project]/node_modules/.pnpm/payload@3.64.0_graphql@16.12.0_typescript@5.5.2/node_modules/payload/dist/utilities/addLocalesToRequest.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addLocalesToRequestFromData",
    ()=>addLocalesToRequestFromData,
    "sanitizeLocales",
    ()=>sanitizeLocales
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$64$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$5$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$sanitizeFallbackLocale$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.64.0_graphql@16.12.0_typescript@5.5.2/node_modules/payload/dist/utilities/sanitizeFallbackLocale.js [app-rsc] (ecmascript)");
;
function addLocalesToRequestFromData(req) {
    const { data, payload: { config } } = req;
    if (data) {
        const localeOnReq = req.locale;
        const fallbackLocaleOnReq = req.fallbackLocale;
        let localeFromData;
        let fallbackLocaleFromData;
        if (!localeOnReq && data?.locale && typeof data.locale === 'string') {
            localeFromData = data.locale;
        }
        if (!fallbackLocaleOnReq) {
            if (data?.['fallback-locale'] && typeof data?.['fallback-locale'] === 'string') {
                fallbackLocaleFromData = data['fallback-locale'];
            }
            if (data?.['fallbackLocale'] && typeof data?.['fallbackLocale'] === 'string') {
                fallbackLocaleFromData = data['fallbackLocale'];
            }
        }
        if (!localeOnReq || !fallbackLocaleOnReq) {
            const { fallbackLocale, locale } = sanitizeLocales({
                fallbackLocale: fallbackLocaleFromData,
                locale: localeFromData,
                localization: config.localization
            });
            if (localeFromData) {
                req.locale = locale;
            }
            if (fallbackLocaleFromData) {
                req.fallbackLocale = fallbackLocale;
            }
        }
    }
}
const sanitizeLocales = ({ fallbackLocale, locale, localization })=>{
    // Check if localization has fallback enabled or if a fallback locale is provided
    if (localization) {
        fallbackLocale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$64$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$5$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$sanitizeFallbackLocale$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sanitizeFallbackLocale"])({
            fallbackLocale,
            locale,
            localization
        });
    }
    if ([
        '*',
        'all'
    ].includes(locale)) {
        locale = 'all';
    } else if (localization && !localization.localeCodes.includes(locale) && localization.fallback) {
        locale = localization.defaultLocale;
    }
    return {
        fallbackLocale,
        locale
    };
}; //# sourceMappingURL=addLocalesToRequest.js.map
}),
"[project]/node_modules/.pnpm/payload@3.64.0_graphql@16.12.0_typescript@5.5.2/node_modules/payload/dist/utilities/wrapInternalEndpoints.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "wrapInternalEndpoints",
    ()=>wrapInternalEndpoints
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$64$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$5$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$addDataAndFileToRequest$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.64.0_graphql@16.12.0_typescript@5.5.2/node_modules/payload/dist/utilities/addDataAndFileToRequest.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$64$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$5$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$addLocalesToRequest$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.64.0_graphql@16.12.0_typescript@5.5.2/node_modules/payload/dist/utilities/addLocalesToRequest.js [app-rsc] (ecmascript)");
;
;
const wrapInternalEndpoints = (endpoints)=>{
    return endpoints.map((endpoint)=>{
        const handler = endpoint.handler;
        if ([
            'patch',
            'post'
        ].includes(endpoint.method)) {
            endpoint.handler = async (req)=>{
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$64$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$5$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$addDataAndFileToRequest$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addDataAndFileToRequest"])(req);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$64$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$5$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$addLocalesToRequest$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addLocalesToRequestFromData"])(req);
                return handler(req);
            };
        }
        return endpoint;
    });
}; //# sourceMappingURL=wrapInternalEndpoints.js.map
}),
"[project]/node_modules/.pnpm/payload@3.64.0_graphql@16.12.0_typescript@5.5.2/node_modules/payload/dist/utilities/headersWithCors.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "headersWithCors",
    ()=>headersWithCors
]);
const headersWithCors = ({ headers, req })=>{
    const cors = req?.payload?.config.cors;
    const requestOrigin = req?.headers?.get('Origin');
    if (cors) {
        const defaultAllowedHeaders = [
            'Origin',
            'X-Requested-With',
            'Content-Type',
            'Accept',
            'Authorization',
            'Content-Encoding',
            'x-apollo-tracing',
            'X-Payload-HTTP-Method-Override'
        ];
        headers.set('Access-Control-Allow-Methods', 'PUT, PATCH, POST, GET, DELETE, OPTIONS');
        if (typeof cors === 'object' && 'headers' in cors) {
            headers.set('Access-Control-Allow-Headers', [
                ...defaultAllowedHeaders,
                ...cors.headers
            ].filter(Boolean).join(', '));
        } else {
            headers.set('Access-Control-Allow-Headers', defaultAllowedHeaders.join(', '));
        }
        if (cors === '*' || typeof cors === 'object' && 'origins' in cors && cors.origins === '*') {
            headers.set('Access-Control-Allow-Origin', '*');
        } else if (Array.isArray(cors) && cors.indexOf(requestOrigin) > -1 || !Array.isArray(cors) && typeof cors === 'object' && 'origins' in cors && cors.origins.indexOf(requestOrigin) > -1) {
            headers.set('Access-Control-Allow-Credentials', 'true');
            headers.set('Access-Control-Allow-Origin', requestOrigin);
        }
    }
    return headers;
}; //# sourceMappingURL=headersWithCors.js.map
}),
"[project]/node_modules/.pnpm/payload@3.64.0_graphql@16.12.0_typescript@5.5.2/node_modules/payload/dist/utilities/killTransaction.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Rollback the transaction from the req using the db adapter and removes it from the req
 */ __turbopack_context__.s([
    "killTransaction",
    ()=>killTransaction
]);
async function killTransaction(req) {
    const { payload, transactionID } = req;
    if (transactionID && !(transactionID instanceof Promise)) {
        try {
            await payload.db.rollbackTransaction(req.transactionID);
        } catch (ignore) {
        // swallow any errors while attempting to rollback
        }
        delete req.transactionID;
    }
} //# sourceMappingURL=killTransaction.js.map
}),
"[project]/node_modules/.pnpm/payload@3.64.0_graphql@16.12.0_typescript@5.5.2/node_modules/payload/dist/utilities/telemetry/conf/envPaths.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "envPaths",
    ()=>envPaths
]);
// @ts-strict-ignore
/**
 * Taken from https://github.com/sindresorhus/env-paths/blob/main/index.js
 *
 * MIT License
 *
 * Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (https://sindresorhus.com)
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */ var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$os__$5b$external$5d$__$28$node$3a$os$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:os [external] (node:os, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:path [external] (node:path, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$process__$5b$external$5d$__$28$node$3a$process$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:process [external] (node:process, cjs)");
;
;
;
const homedir = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$os__$5b$external$5d$__$28$node$3a$os$2c$__cjs$29$__["default"].homedir();
const tmpdir = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$os__$5b$external$5d$__$28$node$3a$os$2c$__cjs$29$__["default"].tmpdir();
const { env } = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$process__$5b$external$5d$__$28$node$3a$process$2c$__cjs$29$__["default"];
const macos = (name)=>{
    const library = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(homedir, 'Library');
    return {
        cache: __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(library, 'Caches', name),
        config: __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(library, 'Preferences', name),
        data: __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(library, 'Application Support', name),
        log: __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(library, 'Logs', name),
        temp: __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(tmpdir, name)
    };
};
const windows = (name)=>{
    const appData = env.APPDATA || __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(homedir, 'AppData', 'Roaming');
    const localAppData = env.LOCALAPPDATA || __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(homedir, 'AppData', 'Local');
    return {
        // Data/config/cache/log are invented by me as Windows isn't opinionated about this
        cache: __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(localAppData, name, 'Cache'),
        config: __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(appData, name, 'Config'),
        data: __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(localAppData, name, 'Data'),
        log: __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(localAppData, name, 'Log'),
        temp: __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(tmpdir, name)
    };
};
// https://specifications.freedesktop.org/basedir-spec/basedir-spec-latest.html
const linux = (name)=>{
    const username = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].basename(homedir);
    return {
        cache: __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(env.XDG_CACHE_HOME || __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(homedir, '.cache'), name),
        config: __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(env.XDG_CONFIG_HOME || __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(homedir, '.config'), name),
        data: __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(env.XDG_DATA_HOME || __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(homedir, '.local', 'share'), name),
        // https://wiki.debian.org/XDGBaseDirectorySpecification#state
        log: __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(env.XDG_STATE_HOME || __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(homedir, '.local', 'state'), name),
        temp: __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(tmpdir, username, name)
    };
};
function envPaths(name, { suffix = 'nodejs' } = {}) {
    if (typeof name !== 'string') {
        throw new TypeError(`Expected a string, got ${typeof name}`);
    }
    if (suffix) {
        // Add suffix to prevent possible conflict with native apps
        name += `-${suffix}`;
    }
    if (__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$process__$5b$external$5d$__$28$node$3a$process$2c$__cjs$29$__["default"].platform === 'darwin') {
        return macos(name);
    }
    if (__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$process__$5b$external$5d$__$28$node$3a$process$2c$__cjs$29$__["default"].platform === 'win32') {
        return windows(name);
    }
    return linux(name);
} //# sourceMappingURL=envPaths.js.map
}),
"[project]/node_modules/.pnpm/payload@3.64.0_graphql@16.12.0_typescript@5.5.2/node_modules/payload/dist/utilities/telemetry/conf/index.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Conf",
    ()=>Conf
]);
/**
 * Taken & simplified from https://github.com/sindresorhus/conf/blob/main/source/index.ts
 *
 * MIT License
 *
 * Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (https://sindresorhus.com)
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */ var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$assert__$5b$external$5d$__$28$node$3a$assert$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:assert [external] (node:assert, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs__$5b$external$5d$__$28$node$3a$fs$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:fs [external] (node:fs, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:path [external] (node:path, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$64$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$5$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$telemetry$2f$conf$2f$envPaths$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.64.0_graphql@16.12.0_typescript@5.5.2/node_modules/payload/dist/utilities/telemetry/conf/envPaths.js [app-rsc] (ecmascript)");
;
;
;
;
const createPlainObject = ()=>Object.create(null);
const checkValueType = (key, value)=>{
    const nonJsonTypes = new Set([
        'function',
        'symbol',
        'undefined'
    ]);
    const type = typeof value;
    if (nonJsonTypes.has(type)) {
        throw new TypeError(`Setting a value of type \`${type}\` for key \`${key}\` is not allowed as it's not supported by JSON`);
    }
};
class Conf {
    #options;
    _deserialize = (value)=>JSON.parse(value);
    _serialize = (value)=>JSON.stringify(value, undefined, '\t');
    events;
    path;
    constructor(){
        const options = {
            configFileMode: 0o666,
            configName: 'config',
            fileExtension: 'json',
            projectSuffix: 'nodejs'
        };
        const cwd = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$64$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$5$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$telemetry$2f$conf$2f$envPaths$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["envPaths"])('payload', {
            suffix: options.projectSuffix
        }).config;
        this.#options = options;
        this.events = new EventTarget();
        const fileExtension = options.fileExtension ? `.${options.fileExtension}` : '';
        this.path = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].resolve(cwd, `${options.configName ?? 'config'}${fileExtension}`);
        const fileStore = this.store;
        const store = Object.assign(createPlainObject(), fileStore);
        try {
            __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$assert__$5b$external$5d$__$28$node$3a$assert$2c$__cjs$29$__["default"].deepEqual(fileStore, store);
        } catch  {
            this.store = store;
        }
    }
    _ensureDirectory() {
        // Ensure the directory exists as it could have been deleted in the meantime.
        __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs__$5b$external$5d$__$28$node$3a$fs$2c$__cjs$29$__["default"].mkdirSync(__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].dirname(this.path), {
            recursive: true
        });
    }
    _write(value) {
        const data = this._serialize(value);
        __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs__$5b$external$5d$__$28$node$3a$fs$2c$__cjs$29$__["default"].writeFileSync(this.path, data, {
            mode: this.#options.configFileMode
        });
    }
    /**
   Delete an item.

   @param key - The key of the item to delete.
   */ delete(key) {
        const { store } = this;
        delete store[key];
        this.store = store;
    }
    /**
   Get an item.

   @param key - The key of the item to get.
   */ get(key) {
        const { store } = this;
        return store[key];
    }
    /**
   Set an item or multiple items at once.

   @param key - You can use [dot-notation](https://github.com/sindresorhus/dot-prop) in a key to access nested properties. Or a hashmap of items to set at once.
   @param value - Must be JSON serializable. Trying to set the type `undefined`, `function`, or `symbol` will result in a `TypeError`.
   */ set(key, value) {
        if (typeof key !== 'string' && typeof key !== 'object') {
            throw new TypeError(`Expected \`key\` to be of type \`string\` or \`object\`, got ${typeof key}`);
        }
        if (typeof key !== 'object' && value === undefined) {
            throw new TypeError('Use `delete()` to clear values');
        }
        const { store } = this;
        const set = (key, value)=>{
            checkValueType(key, value);
            store[key] = value;
        };
        if (typeof key === 'object') {
            const object = key;
            for (const [key, value] of Object.entries(object)){
                set(key, value);
            }
        } else {
            set(key, value);
        }
        this.store = store;
    }
    *[Symbol.iterator]() {
        for (const [key, value] of Object.entries(this.store)){
            yield [
                key,
                value
            ];
        }
    }
    get size() {
        return Object.keys(this.store).length;
    }
    get store() {
        try {
            const dataString = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs__$5b$external$5d$__$28$node$3a$fs$2c$__cjs$29$__["default"].readFileSync(this.path, 'utf8');
            const deserializedData = this._deserialize(dataString);
            return Object.assign(createPlainObject(), deserializedData);
        } catch (error) {
            if (error?.code === 'ENOENT') {
                this._ensureDirectory();
                return createPlainObject();
            }
            throw error;
        }
    }
    set store(value) {
        this._ensureDirectory();
        this._write(value);
        this.events.dispatchEvent(new Event('change'));
    }
} //# sourceMappingURL=index.js.map
}),
"[project]/node_modules/.pnpm/payload@3.64.0_graphql@16.12.0_typescript@5.5.2/node_modules/payload/dist/utilities/telemetry/oneWayHash.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "oneWayHash",
    ()=>oneWayHash
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/crypto [external] (crypto, cjs)");
;
const oneWayHash = (data, secret)=>{
    const hash = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["createHash"])('sha256');
    // prepend value with payload secret. This ensure one-way.
    hash.update(secret);
    // Update is an append operation, not a replacement. The secret from the prior
    // update is still present!
    hash.update(data);
    return hash.digest('hex');
}; //# sourceMappingURL=oneWayHash.js.map
}),
"[project]/node_modules/.pnpm/payload@3.64.0_graphql@16.12.0_typescript@5.5.2/node_modules/payload/dist/utilities/telemetry/index.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getLocalizationInfo",
    ()=>getLocalizationInfo,
    "getPayloadVersion",
    ()=>getPayloadVersion,
    "sendEvent",
    ()=>sendEvent
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$child_process__$5b$external$5d$__$28$child_process$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/child_process [external] (child_process, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ci$2d$info$40$4$2e$3$2e$1$2f$node_modules$2f$ci$2d$info$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/ci-info@4.3.1/node_modules/ci-info/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/crypto [external] (crypto, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/fs [external] (fs, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$url__$5b$external$5d$__$28$url$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/url [external] (url, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$64$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$5$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$findUp$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.64.0_graphql@16.12.0_typescript@5.5.2/node_modules/payload/dist/utilities/findUp.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$64$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$5$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$telemetry$2f$conf$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.64.0_graphql@16.12.0_typescript@5.5.2/node_modules/payload/dist/utilities/telemetry/conf/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$64$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$5$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$telemetry$2f$oneWayHash$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.64.0_graphql@16.12.0_typescript@5.5.2/node_modules/payload/dist/utilities/telemetry/oneWayHash.js [app-rsc] (ecmascript)");
const __TURBOPACK__import$2e$meta__ = {
    get url () {
        return `file://${__turbopack_context__.P("node_modules/.pnpm/payload@3.64.0_graphql@16.12.0_typescript@5.5.2/node_modules/payload/dist/utilities/telemetry/index.js")}`;
    }
};
;
;
;
;
;
;
;
;
;
let baseEvent = null;
const sendEvent = async ({ event, payload })=>{
    try {
        if (payload.config.telemetry !== false) {
            const { packageJSON, packageJSONPath } = await getPackageJSON();
            // Only generate the base event once
            if (!baseEvent) {
                const { projectID, source: projectIDSource } = getProjectID(payload, packageJSON);
                baseEvent = {
                    ciName: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ci$2d$info$40$4$2e$3$2e$1$2f$node_modules$2f$ci$2d$info$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].isCI ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ci$2d$info$40$4$2e$3$2e$1$2f$node_modules$2f$ci$2d$info$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].name : null,
                    envID: getEnvID(),
                    isCI: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ci$2d$info$40$4$2e$3$2e$1$2f$node_modules$2f$ci$2d$info$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].isCI,
                    nodeEnv: ("TURBOPACK compile-time value", "development") || 'development',
                    nodeVersion: process.version,
                    payloadVersion: getPayloadVersion(packageJSON),
                    projectID,
                    projectIDSource,
                    ...getLocalizationInfo(payload),
                    dbAdapter: payload.db.name,
                    emailAdapter: payload.email?.name || null,
                    uploadAdapters: payload.config.upload.adapters
                };
            }
            if (process.env.PAYLOAD_TELEMETRY_DEBUG) {
                payload.logger.info({
                    event: {
                        ...baseEvent,
                        ...event,
                        packageJSONPath
                    },
                    msg: 'Telemetry Event'
                });
                return;
            }
            await fetch('https://telemetry.payloadcms.com/events', {
                body: JSON.stringify({
                    ...baseEvent,
                    ...event
                }),
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'post'
            });
        }
    } catch (_) {
    // Eat any errors in sending telemetry event
    }
};
/**
 * This is a quasi-persistent identifier used to dedupe recurring events. It's
 * generated from random data and completely anonymous.
 */ const getEnvID = ()=>{
    const conf = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$64$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$5$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$telemetry$2f$conf$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Conf"]();
    const ENV_ID = 'envID';
    const val = conf.get(ENV_ID);
    if (val) {
        return val;
    }
    const generated = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["randomBytes"])(32).toString('hex');
    conf.set(ENV_ID, generated);
    return generated;
};
const getProjectID = (payload, packageJSON)=>{
    const gitID = getGitID(payload);
    if (gitID) {
        return {
            projectID: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$64$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$5$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$telemetry$2f$oneWayHash$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["oneWayHash"])(gitID, payload.secret),
            source: 'git'
        };
    }
    const packageJSONID = getPackageJSONID(payload, packageJSON);
    if (packageJSONID) {
        return {
            projectID: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$64$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$5$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$telemetry$2f$oneWayHash$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["oneWayHash"])(packageJSONID, payload.secret),
            source: 'packageJSON'
        };
    }
    const serverURL = payload.config.serverURL;
    if (serverURL) {
        return {
            projectID: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$64$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$5$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$telemetry$2f$oneWayHash$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["oneWayHash"])(serverURL, payload.secret),
            source: 'serverURL'
        };
    }
    const cwd = process.cwd();
    return {
        projectID: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$64$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$5$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$telemetry$2f$oneWayHash$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["oneWayHash"])(cwd, payload.secret),
        source: 'cwd'
    };
};
const getGitID = (payload)=>{
    try {
        const originBuffer = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$child_process__$5b$external$5d$__$28$child_process$2c$__cjs$29$__["execSync"])('git config --local --get remote.origin.url', {
            stdio: 'pipe',
            timeout: 1000
        });
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$64$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$5$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$telemetry$2f$oneWayHash$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["oneWayHash"])(String(originBuffer).trim(), payload.secret);
    } catch (_) {
        return null;
    }
};
const getPackageJSON = async ()=>{
    let packageJSONPath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].resolve(process.cwd(), 'package.json');
    if (!__TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].existsSync(packageJSONPath)) {
        // Old logic
        const filename = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$url__$5b$external$5d$__$28$url$2c$__cjs$29$__["fileURLToPath"])(__TURBOPACK__import$2e$meta__.url);
        const dirname = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].dirname(filename);
        packageJSONPath = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$64$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$5$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$findUp$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["findUp"])({
            dir: dirname,
            fileNames: [
                'package.json'
            ]
        });
    }
    const jsonContentString = await __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].promises.readFile(packageJSONPath, 'utf-8');
    const jsonContent = JSON.parse(jsonContentString);
    return {
        packageJSON: jsonContent,
        packageJSONPath
    };
};
const getPackageJSONID = (payload, packageJSON)=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$64$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$5$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$telemetry$2f$oneWayHash$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["oneWayHash"])(packageJSON.name, payload.secret);
};
const getPayloadVersion = (packageJSON)=>{
    return packageJSON?.dependencies?.payload ?? '';
};
const getLocalizationInfo = (payload)=>{
    if (!payload.config.localization) {
        return {
            locales: [],
            localizationDefaultLocale: null,
            localizationEnabled: false
        };
    }
    return {
        locales: payload.config.localization.localeCodes,
        localizationDefaultLocale: payload.config.localization.defaultLocale,
        localizationEnabled: true
    };
}; //# sourceMappingURL=index.js.map
}),
"[project]/node_modules/.pnpm/payload@3.64.0_graphql@16.12.0_typescript@5.5.2/node_modules/payload/dist/utilities/telemetry/events/adminInit.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "adminInit",
    ()=>adminInit
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$64$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$5$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$telemetry$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.64.0_graphql@16.12.0_typescript@5.5.2/node_modules/payload/dist/utilities/telemetry/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$64$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$5$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$telemetry$2f$oneWayHash$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.64.0_graphql@16.12.0_typescript@5.5.2/node_modules/payload/dist/utilities/telemetry/oneWayHash.js [app-rsc] (ecmascript)");
;
;
const adminInit = ({ headers, payload, user })=>{
    const host = headers.get('host');
    let domainID;
    let userID;
    if (host) {
        domainID = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$64$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$5$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$telemetry$2f$oneWayHash$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["oneWayHash"])(host, payload.secret);
    }
    if (user?.id) {
        userID = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$64$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$5$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$telemetry$2f$oneWayHash$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["oneWayHash"])(String(user.id), payload.secret);
    }
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$64$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$5$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$telemetry$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sendEvent"])({
        event: {
            type: 'admin-init',
            domainID: domainID,
            userID: userID
        },
        payload
    });
}; //# sourceMappingURL=adminInit.js.map
}),
"[project]/node_modules/.pnpm/payload@3.64.0_graphql@16.12.0_typescript@5.5.2/node_modules/payload/dist/utilities/getEntityPolicies.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getEntityPolicies",
    ()=>getEntityPolicies
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$64$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$5$2e$2$2f$node_modules$2f$payload$2f$dist$2f$database$2f$combineQueries$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.64.0_graphql@16.12.0_typescript@5.5.2/node_modules/payload/dist/database/combineQueries.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$64$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$5$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.64.0_graphql@16.12.0_typescript@5.5.2/node_modules/payload/dist/fields/config/types.js [app-rsc] (ecmascript)");
;
;
async function getEntityPolicies(args) {
    const { id, type, blockPolicies, entity, operations, req } = args;
    const { data, locale, payload, user } = req;
    const isLoggedIn = !!user;
    const policies = {
        fields: {}
    };
    let docBeingAccessed;
    async function getEntityDoc({ operation, where } = {}) {
        if (!entity.slug) {
            return undefined;
        }
        if (type === 'global') {
            return payload.findGlobal({
                slug: entity.slug,
                depth: 0,
                fallbackLocale: null,
                locale,
                overrideAccess: true,
                req
            });
        }
        if (type === 'collection' && id) {
            if (typeof where === 'object') {
                const options = {
                    collection: entity.slug,
                    depth: 0,
                    fallbackLocale: null,
                    limit: 1,
                    locale,
                    overrideAccess: true,
                    req
                };
                if (operation === 'readVersions') {
                    const paginatedRes = await payload.findVersions({
                        ...options,
                        where: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$64$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$5$2e$2$2f$node_modules$2f$payload$2f$dist$2f$database$2f$combineQueries$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["combineQueries"])(where, {
                            parent: {
                                equals: id
                            }
                        })
                    });
                    return paginatedRes?.docs?.[0] || undefined;
                }
                const paginatedRes = await payload.find({
                    ...options,
                    pagination: false,
                    where: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$64$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$5$2e$2$2f$node_modules$2f$payload$2f$dist$2f$database$2f$combineQueries$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["combineQueries"])(where, {
                        id: {
                            equals: id
                        }
                    })
                });
                return paginatedRes?.docs?.[0] || undefined;
            }
            return payload.findByID({
                id,
                collection: entity.slug,
                depth: 0,
                fallbackLocale: null,
                locale,
                overrideAccess: true,
                req,
                trash: true
            });
        }
    }
    const createAccessPromise = async ({ access, accessLevel, disableWhere = false, operation, policiesObj })=>{
        const mutablePolicies = policiesObj;
        if (accessLevel === 'field' && docBeingAccessed === undefined) {
            // assign docBeingAccessed first as the promise to avoid multiple calls to getEntityDoc
            docBeingAccessed = getEntityDoc().then((doc)=>{
                docBeingAccessed = doc;
            });
        }
        // awaiting the promise to ensure docBeingAccessed is assigned before it is used
        await docBeingAccessed;
        // https://payloadcms.slack.com/archives/C048Z9C2BEX/p1702054928343769
        const accessResult = await access({
            id,
            data,
            doc: docBeingAccessed,
            req
        });
        // Where query was returned from access function => check if document is returned when querying with where
        if (typeof accessResult === 'object' && !disableWhere) {
            mutablePolicies[operation] = {
                permission: id || type === 'global' ? !!await getEntityDoc({
                    operation,
                    where: accessResult
                }) : true,
                where: accessResult
            };
        } else if (mutablePolicies[operation]?.permission !== false) {
            mutablePolicies[operation] = {
                permission: !!accessResult
            };
        }
    };
    for (const operation of operations){
        if (typeof entity.access[operation] === 'function') {
            await createAccessPromise({
                access: entity.access[operation],
                accessLevel: 'entity',
                operation,
                policiesObj: policies
            });
        } else {
            ;
            policies[operation] = {
                permission: isLoggedIn
            };
        }
        await executeFieldPolicies({
            blockPolicies,
            createAccessPromise,
            entityPermission: policies[operation].permission,
            fields: entity.fields,
            operation,
            payload,
            policiesObj: policies
        });
    }
    return policies;
}
/**
 * Build up permissions object and run access functions for each field of an entity
 */ const executeFieldPolicies = async ({ blockPolicies, createAccessPromise, entityPermission, fields, operation, payload, policiesObj })=>{
    const mutablePolicies = policiesObj.fields;
    // Fields don't have all operations of a collection
    if (operation === 'delete' || operation === 'readVersions' || operation === 'unlock') {
        return;
    }
    await Promise.all(fields.map(async (field)=>{
        if ('name' in field && field.name) {
            if (!mutablePolicies[field.name]) {
                mutablePolicies[field.name] = {};
            }
            if ('access' in field && field.access && typeof field.access[operation] === 'function') {
                await createAccessPromise({
                    access: field.access[operation],
                    accessLevel: 'field',
                    disableWhere: true,
                    operation,
                    policiesObj: mutablePolicies[field.name]
                });
            } else {
                mutablePolicies[field.name][operation] = {
                    permission: policiesObj[operation]?.permission
                };
            }
            if ('fields' in field && field.fields) {
                if (!mutablePolicies[field.name].fields) {
                    mutablePolicies[field.name].fields = {};
                }
                await executeFieldPolicies({
                    blockPolicies,
                    createAccessPromise,
                    entityPermission,
                    fields: field.fields,
                    operation,
                    payload,
                    policiesObj: mutablePolicies[field.name]
                });
            }
            if ('blocks' in field && field.blocks?.length || 'blockReferences' in field && field.blockReferences?.length) {
                if (!mutablePolicies[field.name]?.blocks) {
                    mutablePolicies[field.name].blocks = {};
                }
                await Promise.all((field.blockReferences ?? field.blocks).map(async (_block)=>{
                    const block = typeof _block === 'string' ? payload.blocks[_block] : _block;
                    // Skip if block doesn't exist (invalid block reference)
                    if (!block) {
                        return;
                    }
                    if (typeof _block === 'string') {
                        if (blockPolicies[_block]) {
                            if (typeof blockPolicies[_block].then === 'function') {
                                // Earlier access to this block is still pending, so await it instead of re-running executeFieldPolicies
                                mutablePolicies[field.name].blocks[block.slug] = await blockPolicies[_block];
                            } else {
                                // It's already a resolved policy object
                                mutablePolicies[field.name].blocks[block.slug] = blockPolicies[_block];
                            }
                            return;
                        } else {
                            // We have not seen this block slug yet. Immediately create a promise
                            // so that any parallel calls will just await this same promise
                            // instead of re-running executeFieldPolicies.
                            blockPolicies[_block] = (async ()=>{
                                // If the block doesn't exist yet in our mutablePolicies, initialize it
                                if (!mutablePolicies[field.name].blocks?.[block.slug]) {
                                    // Use field-level permission instead of entityPermission for blocks
                                    // This ensures that if the field has access control, it applies to all blocks in the field
                                    const fieldPermission = mutablePolicies[field.name][operation]?.permission ?? entityPermission;
                                    mutablePolicies[field.name].blocks[block.slug] = {
                                        fields: {},
                                        [operation]: {
                                            permission: fieldPermission
                                        }
                                    };
                                } else if (!mutablePolicies[field.name].blocks[block.slug][operation]) {
                                    // Use field-level permission for consistency
                                    const fieldPermission = mutablePolicies[field.name][operation]?.permission ?? entityPermission;
                                    mutablePolicies[field.name].blocks[block.slug][operation] = {
                                        permission: fieldPermission
                                    };
                                }
                                await executeFieldPolicies({
                                    blockPolicies,
                                    createAccessPromise,
                                    entityPermission: mutablePolicies[field.name][operation]?.permission ?? entityPermission,
                                    fields: block.fields,
                                    operation,
                                    payload,
                                    policiesObj: mutablePolicies[field.name].blocks[block.slug]
                                });
                                return mutablePolicies[field.name].blocks[block.slug];
                            })();
                            mutablePolicies[field.name].blocks[block.slug] = await blockPolicies[_block];
                            blockPolicies[_block] = mutablePolicies[field.name].blocks[block.slug];
                            return;
                        }
                    }
                    if (!mutablePolicies[field.name].blocks?.[block.slug]) {
                        // Use field-level permission instead of entityPermission for blocks
                        const fieldPermission = mutablePolicies[field.name][operation]?.permission ?? entityPermission;
                        mutablePolicies[field.name].blocks[block.slug] = {
                            fields: {},
                            [operation]: {
                                permission: fieldPermission
                            }
                        };
                    } else if (!mutablePolicies[field.name].blocks[block.slug][operation]) {
                        // Use field-level permission for consistency
                        const fieldPermission = mutablePolicies[field.name][operation]?.permission ?? entityPermission;
                        mutablePolicies[field.name].blocks[block.slug][operation] = {
                            permission: fieldPermission
                        };
                    }
                    await executeFieldPolicies({
                        blockPolicies,
                        createAccessPromise,
                        entityPermission: mutablePolicies[field.name][operation]?.permission ?? entityPermission,
                        fields: block.fields,
                        operation,
                        payload,
                        policiesObj: mutablePolicies[field.name].blocks[block.slug]
                    });
                }));
            }
        } else if ('fields' in field && field.fields) {
            await executeFieldPolicies({
                blockPolicies,
                createAccessPromise,
                entityPermission,
                fields: field.fields,
                operation,
                payload,
                policiesObj
            });
        } else if (field.type === 'tabs') {
            await Promise.all(field.tabs.map(async (tab)=>{
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$64$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$5$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["tabHasName"])(tab)) {
                    if (!mutablePolicies[tab.name]) {
                        mutablePolicies[tab.name] = {
                            fields: {},
                            [operation]: {
                                permission: entityPermission
                            }
                        };
                    } else if (!mutablePolicies[tab.name][operation]) {
                        mutablePolicies[tab.name][operation] = {
                            permission: entityPermission
                        };
                    }
                    await executeFieldPolicies({
                        blockPolicies,
                        createAccessPromise,
                        entityPermission,
                        fields: tab.fields,
                        operation,
                        payload,
                        policiesObj: mutablePolicies[tab.name]
                    });
                } else {
                    await executeFieldPolicies({
                        blockPolicies,
                        createAccessPromise,
                        entityPermission,
                        fields: tab.fields,
                        operation,
                        payload,
                        policiesObj
                    });
                }
            }));
        }
    }));
}; //# sourceMappingURL=getEntityPolicies.js.map
}),
"[project]/node_modules/.pnpm/payload@3.64.0_graphql@16.12.0_typescript@5.5.2/node_modules/payload/dist/utilities/sanitizePermissions.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "recursivelySanitizeCollections",
    ()=>recursivelySanitizeCollections,
    "recursivelySanitizeGlobals",
    ()=>recursivelySanitizeGlobals,
    "sanitizePermissions",
    ()=>sanitizePermissions
]);
function checkAndSanitizeFieldsPermssions(data) {
    let allFieldPermissionsTrue = true;
    for(const key in data){
        if (typeof data[key] === 'object') {
            if (!checkAndSanitizePermissions(data[key])) {
                allFieldPermissionsTrue = false;
            } else {
                ;
                data[key] = true;
            }
        } else if (data[key] !== true) {
            allFieldPermissionsTrue = false;
        }
    }
    // If all values are true or it's an empty object, return true
    return allFieldPermissionsTrue;
}
/**
 * Check if all permissions in a FieldPermissions, CollectionPermission or GlobalPermission object are true.
 * If nested fields or blocks are present, the function will recursively check those as well.
 */ function checkAndSanitizePermissions(_data) {
    const data = _data;
    /**
   * Check blocks permissions
   */ let blocksPermissions = true;
    if ('blocks' in data && data.blocks) {
        for(const blockSlug in data.blocks){
            if (typeof data.blocks[blockSlug] === 'object') {
                for(const key in data.blocks[blockSlug]){
                    /**
           * Check fields in nested blocks
           */ if (key === 'fields') {
                        if (data.blocks[blockSlug].fields) {
                            if (!checkAndSanitizeFieldsPermssions(data.blocks[blockSlug].fields)) {
                                blocksPermissions = false;
                            } else {
                                ;
                                data.blocks[blockSlug].fields = true;
                            }
                        }
                    } else {
                        if (typeof data.blocks[blockSlug][key] === 'object') {
                            /**
               * Check Permissions in nested blocks
               */ if (isPermissionObject(data.blocks[blockSlug][key])) {
                                if (data.blocks[blockSlug][key]['permission'] === true && !('where' in data.blocks[blockSlug][key])) {
                                    // If the permission is true and there is no where clause, set the key to true
                                    data.blocks[blockSlug][key] = true;
                                    continue;
                                } else if (data.blocks[blockSlug][key]['permission'] === true && 'where' in data.blocks[blockSlug][key]) {
                                    // otherwise do nothing so we can keep the where clause
                                    blocksPermissions = false;
                                } else {
                                    blocksPermissions = false;
                                    data.blocks[blockSlug][key] = false;
                                    delete data.blocks[blockSlug][key];
                                    continue;
                                }
                            } else {
                                throw new Error('Unexpected object in block permissions');
                            }
                        }
                    }
                }
            } else if (data.blocks[blockSlug] !== true) {
                // If any value is not true, return false
                blocksPermissions = false;
                delete data.blocks[blockSlug];
            }
        }
        if (blocksPermissions) {
            ;
            data.blocks = true;
        }
    }
    /**
   * Check nested Fields permissions
   */ let fieldsPermissions = true;
    if (data.fields) {
        if (!checkAndSanitizeFieldsPermssions(data.fields)) {
            fieldsPermissions = false;
        } else {
            ;
            data.fields = true;
        }
    }
    /**
   * Check other Permissions objects (e.g. read, write)
   */ let otherPermissions = true;
    for(const key in data){
        if (key === 'fields' || key === 'blocks') {
            continue;
        }
        if (typeof data[key] === 'object') {
            if (isPermissionObject(data[key])) {
                if (data[key]['permission'] === true && !('where' in data[key])) {
                    // If the permission is true and there is no where clause, set the key to true
                    data[key] = true;
                    continue;
                } else if (data[key]['permission'] === true && 'where' in data[key]) {
                    // otherwise do nothing so we can keep the where clause
                    otherPermissions = false;
                } else {
                    otherPermissions = false;
                    data[key] = false;
                    delete data[key];
                    continue;
                }
            } else {
                throw new Error('Unexpected object in fields permissions');
            }
        } else if (data[key] !== true) {
            // If any value is not true, return false
            otherPermissions = false;
        }
    }
    // If all values are true or it's an empty object, return true
    return fieldsPermissions && blocksPermissions && otherPermissions;
}
/**
 * Check if an object is a permission object.
 */ function isPermissionObject(data) {
    return typeof data === 'object' && 'permission' in data && typeof data['permission'] === 'boolean';
}
/**
 * Recursively remove empty objects from an object.
 */ function cleanEmptyObjects(obj) {
    Object.keys(obj).forEach((key)=>{
        if (typeof obj[key] === 'object' && obj[key] !== null) {
            // Recursive call
            cleanEmptyObjects(obj[key]);
            if (Object.keys(obj[key]).length === 0) {
                // Delete the key if the object is empty
                delete obj[key];
            }
        } else if (obj[key] === null || obj[key] === undefined) {
            delete obj[key];
        }
    });
}
function recursivelySanitizeCollections(obj) {
    if (typeof obj !== 'object') {
        return;
    }
    const collectionPermissions = Object.values(obj);
    for (const collectionPermission of collectionPermissions){
        checkAndSanitizePermissions(collectionPermission);
    }
}
function recursivelySanitizeGlobals(obj) {
    if (typeof obj !== 'object') {
        return;
    }
    const globalPermissions = Object.values(obj);
    for (const globalPermission of globalPermissions){
        checkAndSanitizePermissions(globalPermission);
    }
}
function sanitizePermissions(data) {
    if (data.canAccessAdmin === false) {
        delete data.canAccessAdmin;
    }
    if (data.collections) {
        recursivelySanitizeCollections(data.collections);
    }
    if (data.globals) {
        recursivelySanitizeGlobals(data.globals);
    }
    // Run clean up of empty objects at the end
    cleanEmptyObjects(data);
    return data;
} //# sourceMappingURL=sanitizePermissions.js.map
}),
"[project]/node_modules/.pnpm/payload@3.64.0_graphql@16.12.0_typescript@5.5.2/node_modules/payload/dist/utilities/getRequestEntity.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getRequestCollection",
    ()=>getRequestCollection,
    "getRequestCollectionWithID",
    ()=>getRequestCollectionWithID,
    "getRequestGlobal",
    ()=>getRequestGlobal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$64$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$5$2e$2$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.64.0_graphql@16.12.0_typescript@5.5.2/node_modules/payload/dist/errors/APIError.js [app-rsc] (ecmascript)");
;
const getRequestCollection = (req)=>{
    const collectionSlug = req.routeParams?.collection;
    if (typeof collectionSlug !== 'string') {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$64$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$5$2e$2$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APIError"](`No collection was specified`, 400);
    }
    const collection = req.payload.collections[collectionSlug];
    if (!collection) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$64$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$5$2e$2$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APIError"](`Collection with the slug ${collectionSlug} was not found`, 404);
    }
    return collection;
};
const getRequestCollectionWithID = (req, { disableSanitize, optionalID } = {})=>{
    const collection = getRequestCollection(req);
    const id = req.routeParams?.id;
    if (typeof id !== 'string') {
        if (optionalID) {
            return {
                id: undefined,
                collection
            };
        }
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$64$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$5$2e$2$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APIError"](`ID was not specified`, 400);
    }
    if (disableSanitize === true) {
        return {
            id,
            collection
        };
    }
    let sanitizedID = id;
    // If default db ID type is a number, we should sanitize
    let shouldSanitize = Boolean(req.payload.db.defaultIDType === 'number');
    // UNLESS the customIDType for this collection is text.... then we leave it
    if (shouldSanitize && collection.customIDType === 'text') {
        shouldSanitize = false;
    }
    // If we still should sanitize, parse float
    if (shouldSanitize) {
        sanitizedID = parseFloat(sanitizedID);
    }
    return {
        // @ts-expect-error generic return
        id: sanitizedID,
        collection
    };
};
const getRequestGlobal = (req)=>{
    const globalSlug = req.routeParams?.global;
    if (typeof globalSlug !== 'string') {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$64$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$5$2e$2$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APIError"](`No global was specified`, 400);
    }
    const globalConfig = req.payload.globals.config.find((each)=>each.slug === globalSlug);
    if (!globalConfig) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$64$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$5$2e$2$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APIError"](`Global with the slug ${globalSlug} was not found`, 404);
    }
    return globalConfig;
}; //# sourceMappingURL=getRequestEntity.js.map
}),
"[project]/node_modules/.pnpm/payload@3.64.0_graphql@16.12.0_typescript@5.5.2/node_modules/payload/dist/utilities/appendNonTrashedFilter.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "appendNonTrashedFilter",
    ()=>appendNonTrashedFilter
]);
const appendNonTrashedFilter = ({ deletedAtPath = 'deletedAt', enableTrash, trash, where })=>{
    if (!enableTrash || trash) {
        return where;
    }
    const notTrashedFilter = {
        [deletedAtPath]: {
            exists: false
        }
    };
    if (where?.and) {
        return {
            ...where,
            and: [
                ...where.and,
                notTrashedFilter
            ]
        };
    }
    return {
        and: [
            notTrashedFilter,
            ...where ? [
                where
            ] : []
        ]
    };
}; //# sourceMappingURL=appendNonTrashedFilter.js.map
}),
"[project]/node_modules/.pnpm/payload@3.64.0_graphql@16.12.0_typescript@5.5.2/node_modules/payload/dist/utilities/commitTransaction.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * complete a transaction calling adapter db.commitTransaction and delete the transactionID from req
 */ __turbopack_context__.s([
    "commitTransaction",
    ()=>commitTransaction
]);
async function commitTransaction(req) {
    const { payload, transactionID } = req;
    await payload.db.commitTransaction(transactionID);
    delete req.transactionID;
} //# sourceMappingURL=commitTransaction.js.map
}),
"[project]/node_modules/.pnpm/payload@3.64.0_graphql@16.12.0_typescript@5.5.2/node_modules/payload/dist/utilities/formatAdminURL.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/** Will read the `routes.admin` config and appropriately handle `"/"` admin paths */ __turbopack_context__.s([
    "formatAdminURL",
    ()=>formatAdminURL
]);
const formatAdminURL = (args)=>{
    const { adminRoute, basePath = '', path: pathFromArgs, serverURL } = args;
    const path = pathFromArgs || '';
    if (adminRoute) {
        if (adminRoute === '/') {
            if (!path) {
                return `${serverURL || ''}${basePath}${adminRoute}`;
            }
        } else {
            return `${serverURL || ''}${basePath}${adminRoute}${path}`;
        }
    }
    return `${serverURL || ''}${basePath}${path}`;
}; //# sourceMappingURL=formatAdminURL.js.map
}),
"[project]/node_modules/.pnpm/payload@3.64.0_graphql@16.12.0_typescript@5.5.2/node_modules/payload/dist/utilities/initTransaction.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Starts a new transaction using the db adapter with a random id and then assigns it to the req.transaction
 * @returns true if beginning a transaction and false when req already has a transaction to use
 */ __turbopack_context__.s([
    "initTransaction",
    ()=>initTransaction
]);
async function initTransaction(req) {
    const { payload, transactionID } = req;
    if (transactionID instanceof Promise) {
        // wait for whoever else is already creating the transaction
        await transactionID;
        return false;
    }
    if (transactionID) {
        // we already have a transaction, we're not in charge of committing it
        return false;
    }
    if (typeof payload.db.beginTransaction === 'function') {
        // create a new transaction
        req.transactionID = payload.db.beginTransaction().then((transactionID)=>{
            if (transactionID) {
                req.transactionID = transactionID;
            }
            return transactionID;
        });
        return !!await req.transactionID;
    }
    return false;
} //# sourceMappingURL=initTransaction.js.map
}),
"[project]/node_modules/.pnpm/payload@3.64.0_graphql@16.12.0_typescript@5.5.2/node_modules/payload/dist/utilities/getSelectMode.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getSelectMode",
    ()=>getSelectMode
]);
const getSelectMode = (select)=>{
    for(const key in select){
        const selectValue = select[key];
        if (selectValue === false) {
            return 'exclude';
        }
        if (typeof selectValue === 'object') {
            return getSelectMode(selectValue);
        }
    }
    return 'include';
}; //# sourceMappingURL=getSelectMode.js.map
}),
"[project]/node_modules/.pnpm/payload@3.64.0_graphql@16.12.0_typescript@5.5.2/node_modules/payload/dist/utilities/sanitizeInternalFields.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "sanitizeInternalFields",
    ()=>sanitizeInternalFields
]);
const sanitizeInternalFields = (incomingDoc)=>{
    // Create a new object to hold the sanitized fields
    const newDoc = {};
    for(const key in incomingDoc){
        const val = incomingDoc[key];
        if (key === '_id') {
            newDoc['id'] = val;
        } else if (key !== '__v') {
            newDoc[key] = val;
        }
    }
    return newDoc;
}; //# sourceMappingURL=sanitizeInternalFields.js.map
}),
"[project]/node_modules/.pnpm/payload@3.64.0_graphql@16.12.0_typescript@5.5.2/node_modules/payload/dist/utilities/sanitizeJoinParams.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "sanitizeJoinParams",
    ()=>sanitizeJoinParams
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$64$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$5$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$isNumber$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.64.0_graphql@16.12.0_typescript@5.5.2/node_modules/payload/dist/utilities/isNumber.js [app-rsc] (ecmascript)");
;
const sanitizeJoinParams = (_joins = {})=>{
    const joinQuery = {};
    const joins = _joins;
    Object.keys(joins).forEach((schemaPath)=>{
        if (joins[schemaPath] === 'false' || joins[schemaPath] === false) {
            joinQuery[schemaPath] = false;
        } else {
            joinQuery[schemaPath] = {
                count: joins[schemaPath].count === 'true',
                limit: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$64$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$5$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$isNumber$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isNumber"])(joins[schemaPath]?.limit) ? Number(joins[schemaPath].limit) : undefined,
                page: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$64$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$5$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$isNumber$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isNumber"])(joins[schemaPath]?.page) ? Number(joins[schemaPath].page) : undefined,
                sort: joins[schemaPath]?.sort ? joins[schemaPath].sort : undefined,
                where: joins[schemaPath]?.where ? joins[schemaPath].where : undefined
            };
        }
    });
    return joinQuery;
}; //# sourceMappingURL=sanitizeJoinParams.js.map
}),
"[project]/node_modules/.pnpm/payload@3.64.0_graphql@16.12.0_typescript@5.5.2/node_modules/payload/dist/utilities/sanitizeSelectParam.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Sanitizes REST select query to SelectType
 */ __turbopack_context__.s([
    "sanitizeSelectParam",
    ()=>sanitizeSelectParam
]);
const sanitizeSelectParam = (unsanitizedSelect)=>{
    if (unsanitizedSelect && typeof unsanitizedSelect === 'object') {
        for(const _k in unsanitizedSelect){
            const k = _k;
            if (unsanitizedSelect[k] === 'true') {
                ;
                unsanitizedSelect[k] = true;
            } else if (unsanitizedSelect[k] === 'false') {
                ;
                unsanitizedSelect[k] = false;
            } else if (typeof unsanitizedSelect[k] === 'object') {
                sanitizeSelectParam(unsanitizedSelect[k]);
            }
        }
    }
    return unsanitizedSelect;
}; //# sourceMappingURL=sanitizeSelectParam.js.map
}),
"[project]/node_modules/.pnpm/payload@3.64.0_graphql@16.12.0_typescript@5.5.2/node_modules/payload/dist/utilities/sanitizePopulateParam.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "sanitizePopulateParam",
    ()=>sanitizePopulateParam
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$64$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$5$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$sanitizeSelectParam$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.64.0_graphql@16.12.0_typescript@5.5.2/node_modules/payload/dist/utilities/sanitizeSelectParam.js [app-rsc] (ecmascript)");
;
const sanitizePopulateParam = (unsanitizedPopulate)=>{
    if (!unsanitizedPopulate || typeof unsanitizedPopulate !== 'object') {
        return;
    }
    for(const k in unsanitizedPopulate){
        ;
        unsanitizedPopulate[k] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$64$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$5$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$sanitizeSelectParam$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sanitizeSelectParam"])(unsanitizedPopulate[k]);
    }
    return unsanitizedPopulate;
}; //# sourceMappingURL=sanitizePopulateParam.js.map
}),
"[project]/node_modules/.pnpm/payload@3.64.0_graphql@16.12.0_typescript@5.5.2/node_modules/payload/dist/utilities/parseCookies.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "parseCookies",
    ()=>parseCookies
]);
const parseCookies = (headers)=>{
    const list = new Map();
    const rc = headers.get('Cookie');
    if (rc) {
        rc.split(';').forEach((cookie)=>{
            const parts = cookie.split('=');
            const key = parts.shift()?.trim();
            const encodedValue = parts.join('=');
            try {
                const decodedValue = decodeURI(encodedValue);
                list.set(key, decodedValue);
            } catch  {
            // ignore invalid encoded values
            }
        });
    }
    return list;
}; //# sourceMappingURL=parseCookies.js.map
}),
"[project]/node_modules/.pnpm/payload@3.64.0_graphql@16.12.0_typescript@5.5.2/node_modules/payload/dist/utilities/isURLAllowed.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isURLAllowed",
    ()=>isURLAllowed
]);
const isURLAllowed = (url, allowList)=>{
    try {
        const parsedUrl = new URL(url);
        return allowList.some((allowItem)=>{
            return Object.entries(allowItem).every(([key, value])=>{
                // Skip undefined or null values
                if (!value) {
                    return true;
                }
                // Compare protocol with colon
                if (key === 'protocol') {
                    return typeof value === 'string' && parsedUrl.protocol === `${value}:`;
                }
                if (key === 'pathname') {
                    // Convert wildcards to a regex
                    const regexPattern = value.replace(/\*\*/g, '.*') // Match any path
                    .replace(/\*/g, '[^/]*') // Match any part of a path segment
                    .replace(/\/$/, '(/)?') // Allow optional trailing slash
                    ;
                    const regex = new RegExp(`^${regexPattern}$`);
                    return regex.test(parsedUrl.pathname);
                }
                // Default comparison for all other properties (hostname, port, search)
                return parsedUrl[key] === value;
            });
        });
    } catch  {
        return false // If the URL is invalid, deny by default
        ;
    }
}; //# sourceMappingURL=isURLAllowed.js.map
}),
"[project]/node_modules/.pnpm/payload@3.64.0_graphql@16.12.0_typescript@5.5.2/node_modules/payload/dist/utilities/validateMimeType.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "validateMimeType",
    ()=>validateMimeType
]);
const validateMimeType = (mimeType, allowedMimeTypes)=>{
    const cleanedMimeTypes = allowedMimeTypes.map((v)=>v.replace('*', ''));
    return cleanedMimeTypes.some((cleanedMimeType)=>mimeType.startsWith(cleanedMimeType));
}; //# sourceMappingURL=validateMimeType.js.map
}),
"[project]/node_modules/.pnpm/payload@3.64.0_graphql@16.12.0_typescript@5.5.2/node_modules/payload/dist/utilities/parseBooleanString.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Useful when parsing query parameters where booleans are represented as strings.
 * Falls back to `undefined` to allow default handling elsewhere.
 */ __turbopack_context__.s([
    "parseBooleanString",
    ()=>parseBooleanString
]);
const parseBooleanString = (value)=>{
    if (typeof value === 'boolean') {
        return value;
    }
    if (value === 'true') {
        return true;
    }
    if (value === 'false') {
        return false;
    }
    return undefined;
}; //# sourceMappingURL=parseBooleanString.js.map
}),
"[project]/node_modules/.pnpm/payload@3.64.0_graphql@16.12.0_typescript@5.5.2/node_modules/payload/dist/utilities/parseParams/index.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "booleanParams",
    ()=>booleanParams,
    "numberParams",
    ()=>numberParams,
    "parseParams",
    ()=>parseParams
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$64$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$5$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$isNumber$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.64.0_graphql@16.12.0_typescript@5.5.2/node_modules/payload/dist/utilities/isNumber.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$64$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$5$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$parseBooleanString$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.64.0_graphql@16.12.0_typescript@5.5.2/node_modules/payload/dist/utilities/parseBooleanString.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$64$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$5$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$sanitizeJoinParams$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.64.0_graphql@16.12.0_typescript@5.5.2/node_modules/payload/dist/utilities/sanitizeJoinParams.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$64$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$5$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$sanitizePopulateParam$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.64.0_graphql@16.12.0_typescript@5.5.2/node_modules/payload/dist/utilities/sanitizePopulateParam.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$64$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$5$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$sanitizeSelectParam$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.64.0_graphql@16.12.0_typescript@5.5.2/node_modules/payload/dist/utilities/sanitizeSelectParam.js [app-rsc] (ecmascript)");
;
;
;
;
;
const booleanParams = [
    'autosave',
    'draft',
    'trash',
    'overrideLock',
    'pagination',
    'flattenLocales'
];
const numberParams = [
    'depth',
    'limit',
    'page'
];
const parseParams = (params)=>{
    const parsedParams = params || {};
    // iterate through known params to make this very fast
    for (const key of booleanParams){
        if (key in params) {
            parsedParams[key] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$64$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$5$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$parseBooleanString$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseBooleanString"])(params[key]);
        }
    }
    for (const key of numberParams){
        if (key in params) {
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$64$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$5$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$isNumber$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isNumber"])(params[key])) {
                parsedParams[key] = Number(params[key]);
            }
        }
    }
    if ('populate' in params) {
        parsedParams.populate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$64$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$5$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$sanitizePopulateParam$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sanitizePopulateParam"])(params.populate);
    }
    if ('select' in params) {
        parsedParams.select = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$64$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$5$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$sanitizeSelectParam$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sanitizeSelectParam"])(params.select);
    }
    if ('joins' in params) {
        parsedParams.joins = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$64$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$5$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$sanitizeJoinParams$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sanitizeJoinParams"])(params.joins);
    }
    if ('sort' in params) {
        parsedParams.sort = typeof params.sort === 'string' ? params.sort.split(',') : undefined;
    }
    if ('data' in params && typeof params.data === 'string' && params.data.length > 0) {
        parsedParams.data = JSON.parse(params.data);
    }
    return parsedParams;
}; //# sourceMappingURL=index.js.map
}),
"[project]/node_modules/.pnpm/payload@3.64.0_graphql@16.12.0_typescript@5.5.2/node_modules/payload/dist/utilities/isolateObjectProperty.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Creates a proxy for the given object that has its own property
 */ __turbopack_context__.s([
    "isolateObjectProperty",
    ()=>isolateObjectProperty
]);
function isolateObjectProperty(object, key) {
    const keys = Array.isArray(key) ? key : [
        key
    ];
    const delegate = {};
    // Initialize delegate with the keys, if they exist in the original object
    for (const k of keys){
        if (k in object) {
            delegate[k] = object[k];
        }
    }
    const handler = {
        deleteProperty (target, p) {
            return Reflect.deleteProperty(keys.includes(p) ? delegate : target, p);
        },
        get (target, p, receiver) {
            return Reflect.get(keys.includes(p) ? delegate : target, p, receiver);
        },
        has (target, p) {
            return Reflect.has(keys.includes(p) ? delegate : target, p);
        },
        set (target, p, newValue, receiver) {
            if (keys.includes(p)) {
                // in case of transactionID we must ignore any receiver, because
                // "If provided and target does not have a setter for propertyKey, the property will be set on receiver instead."
                return Reflect.set(delegate, p, newValue);
            } else {
                return Reflect.set(target, p, newValue, receiver);
            }
        }
    };
    return new Proxy(object, handler);
} //# sourceMappingURL=isolateObjectProperty.js.map
}),
"[project]/node_modules/.pnpm/payload@3.64.0_graphql@16.12.0_typescript@5.5.2/node_modules/payload/dist/utilities/filterDataToSelectedLocales.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "filterDataToSelectedLocales",
    ()=>filterDataToSelectedLocales
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$64$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$5$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.64.0_graphql@16.12.0_typescript@5.5.2/node_modules/payload/dist/fields/config/types.js [app-rsc] (ecmascript)");
;
function filterDataToSelectedLocales({ configBlockReferences, docWithLocales, fields, parentIsLocalized = false, selectedLocales }) {
    if (!docWithLocales || typeof docWithLocales !== 'object') {
        return docWithLocales;
    }
    const result = {};
    for (const field of fields){
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$64$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$5$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fieldAffectsData"])(field)) {
            const fieldIsLocalized = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$64$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$5$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fieldShouldBeLocalized"])({
                field,
                parentIsLocalized
            });
            switch(field.type){
                case 'array':
                    {
                        if (Array.isArray(docWithLocales[field.name])) {
                            result[field.name] = docWithLocales[field.name].map((item)=>filterDataToSelectedLocales({
                                    configBlockReferences,
                                    docWithLocales: item,
                                    fields: field.fields,
                                    parentIsLocalized: fieldIsLocalized,
                                    selectedLocales
                                }));
                        }
                        break;
                    }
                case 'blocks':
                    {
                        if (field.name in docWithLocales && Array.isArray(docWithLocales[field.name])) {
                            result[field.name] = docWithLocales[field.name].map((blockData)=>{
                                let block;
                                if (configBlockReferences && field.blockReferences) {
                                    for (const blockOrReference of field.blockReferences){
                                        if (typeof blockOrReference === 'string') {
                                            block = configBlockReferences.find((b)=>b.slug === blockData.blockType);
                                        } else {
                                            block = blockOrReference;
                                        }
                                    }
                                } else if (field.blocks) {
                                    block = field.blocks.find((b)=>b.slug === blockData.blockType);
                                }
                                if (block) {
                                    return filterDataToSelectedLocales({
                                        configBlockReferences,
                                        docWithLocales: blockData,
                                        fields: block?.fields || [],
                                        parentIsLocalized: fieldIsLocalized,
                                        selectedLocales
                                    });
                                }
                                return blockData;
                            });
                        }
                        break;
                    }
                case 'group':
                    {
                        // Named groups create a nested data structure
                        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$64$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$5$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fieldAffectsData"])(field) && field.name in docWithLocales && typeof docWithLocales[field.name] === 'object') {
                            result[field.name] = filterDataToSelectedLocales({
                                configBlockReferences,
                                docWithLocales: docWithLocales[field.name],
                                fields: field.fields,
                                parentIsLocalized: fieldIsLocalized,
                                selectedLocales
                            });
                        } else {
                            // Unnamed groups pass through the same data level
                            const nestedResult = filterDataToSelectedLocales({
                                configBlockReferences,
                                docWithLocales,
                                fields: field.fields,
                                parentIsLocalized,
                                selectedLocales
                            });
                            Object.assign(result, nestedResult);
                        }
                        break;
                    }
                default:
                    {
                        // For all other data-affecting fields (text, number, select, etc.)
                        if (field.name in docWithLocales) {
                            const value = docWithLocales[field.name];
                            // If the field is localized and has locale data
                            if (fieldIsLocalized && value && typeof value === 'object' && !Array.isArray(value)) {
                                // If selectedLocales is provided, filter to only those locales
                                if (selectedLocales && selectedLocales.length > 0) {
                                    const filtered = {};
                                    for (const locale of selectedLocales){
                                        if (locale in value) {
                                            filtered[locale] = value[locale];
                                        }
                                    }
                                    if (Object.keys(filtered).length > 0) {
                                        result[field.name] = filtered;
                                    }
                                } else {
                                    // If no selectedLocales, include all locales
                                    result[field.name] = value;
                                }
                            } else {
                                // Non-localized field or non-object value
                                result[field.name] = value;
                            }
                        }
                        break;
                    }
            }
        } else {
            // Layout-only fields that don't affect data structure
            switch(field.type){
                case 'collapsible':
                case 'row':
                    {
                        // These pass through the same data level
                        const nestedResult = filterDataToSelectedLocales({
                            configBlockReferences,
                            docWithLocales,
                            fields: field.fields,
                            parentIsLocalized,
                            selectedLocales
                        });
                        Object.assign(result, nestedResult);
                        break;
                    }
                case 'tabs':
                    {
                        for (const tab of field.tabs){
                            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$64$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$5$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["tabHasName"])(tab)) {
                                // Named tabs create a nested data structure
                                if (tab.name in docWithLocales && typeof docWithLocales[tab.name] === 'object') {
                                    result[tab.name] = filterDataToSelectedLocales({
                                        configBlockReferences,
                                        docWithLocales: docWithLocales[tab.name],
                                        fields: tab.fields,
                                        parentIsLocalized,
                                        selectedLocales
                                    });
                                }
                            } else {
                                // Unnamed tabs pass through the same data level
                                const nestedResult = filterDataToSelectedLocales({
                                    configBlockReferences,
                                    docWithLocales,
                                    fields: tab.fields,
                                    parentIsLocalized,
                                    selectedLocales
                                });
                                Object.assign(result, nestedResult);
                            }
                        }
                        break;
                    }
            }
        }
    }
    return result;
} //# sourceMappingURL=filterDataToSelectedLocales.js.map
}),
"[project]/node_modules/.pnpm/payload@3.64.0_graphql@16.12.0_typescript@5.5.2/node_modules/payload/dist/utilities/validatePDF.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "validatePDF",
    ()=>validatePDF
]);
function validatePDF(buffer) {
    // Check for PDF header
    const header = buffer.subarray(0, 8).toString('latin1');
    if (!header.startsWith('%PDF-')) {
        return false;
    }
    // Check for EOF marker and xref table
    const endSize = Math.min(1024, buffer.length);
    const end = buffer.subarray(buffer.length - endSize).toString('latin1');
    if (!end.includes('%%EOF') || !end.includes('xref')) {
        return false;
    }
    return true;
} //# sourceMappingURL=validatePDF.js.map
}),
"[project]/node_modules/.pnpm/payload@3.64.0_graphql@16.12.0_typescript@5.5.2/node_modules/payload/dist/utilities/mapAsync.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "mapAsync",
    ()=>mapAsync
]);
async function mapAsync(arr, callbackfn) {
    return Promise.all(arr.map(callbackfn));
} //# sourceMappingURL=mapAsync.js.map
}),
"[project]/node_modules/.pnpm/payload@3.64.0_graphql@16.12.0_typescript@5.5.2/node_modules/payload/dist/utilities/sanitizeSelect.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "sanitizeSelect",
    ()=>sanitizeSelect
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$translations$40$3$2e$64$2e$0$2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$utilities$2f$deepMergeSimple$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@payloadcms+translations@3.64.0/node_modules/@payloadcms/translations/dist/utilities/deepMergeSimple.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$64$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$5$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$getSelectMode$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.64.0_graphql@16.12.0_typescript@5.5.2/node_modules/payload/dist/utilities/getSelectMode.js [app-rsc] (ecmascript)");
;
;
// Transform post.title -> post, post.category.title -> post
const stripVirtualPathToCurrentCollection = ({ fields, path, versions })=>{
    const resultSegments = [];
    if (versions) {
        resultSegments.push('version');
        const versionField = fields.find((each)=>each.name === 'version');
        if (versionField && versionField.type === 'group') {
            fields = versionField.flattenedFields;
        }
    }
    for (const segment of path.split('.')){
        const field = fields.find((each)=>each.name === segment);
        if (!field) {
            continue;
        }
        resultSegments.push(segment);
        if (field.type === 'relationship' || field.type === 'upload') {
            return resultSegments.join('.');
        }
    }
    return resultSegments.join('.');
};
const getAllVirtualRelations = ({ fields })=>{
    const result = [];
    for (const field of fields){
        if ('virtual' in field && typeof field.virtual === 'string') {
            result.push(field.virtual);
        } else if (field.type === 'group' || field.type === 'tab') {
            const nestedResult = getAllVirtualRelations({
                fields: field.flattenedFields
            });
            for (const nestedItem of nestedResult){
                result.push(nestedItem);
            }
        }
    }
    return result;
};
const resolveVirtualRelationsToSelect = ({ fields, selectValue, topLevelFields, versions })=>{
    const result = [];
    if (selectValue === true) {
        for (const item of getAllVirtualRelations({
            fields
        })){
            result.push(stripVirtualPathToCurrentCollection({
                fields: topLevelFields,
                path: item,
                versions
            }));
        }
    } else {
        for(const fieldName in selectValue){
            const field = fields.find((each)=>each.name === fieldName);
            if (!field) {
                continue;
            }
            if ('virtual' in field && typeof field.virtual === 'string') {
                result.push(stripVirtualPathToCurrentCollection({
                    fields: topLevelFields,
                    path: field.virtual,
                    versions
                }));
            } else if (field.type === 'group' || field.type === 'tab') {
                for (const item of resolveVirtualRelationsToSelect({
                    fields: field.flattenedFields,
                    selectValue: selectValue[fieldName],
                    topLevelFields,
                    versions
                })){
                    result.push(stripVirtualPathToCurrentCollection({
                        fields: topLevelFields,
                        path: item,
                        versions
                    }));
                }
            }
        }
    }
    return result;
};
const sanitizeSelect = ({ fields, forceSelect, select, versions })=>{
    if (!select) {
        return select;
    }
    const selectMode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$64$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$5$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$getSelectMode$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSelectMode"])(select);
    if (selectMode === 'exclude') {
        return select;
    }
    if (forceSelect) {
        select = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$translations$40$3$2e$64$2e$0$2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$utilities$2f$deepMergeSimple$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deepMergeSimple"])(select, forceSelect);
    }
    if (select) {
        const virtualRelations = resolveVirtualRelationsToSelect({
            fields,
            selectValue: select,
            topLevelFields: fields,
            versions: versions ?? false
        });
        for (const path of virtualRelations){
            let currentRef = select;
            const segments = path.split('.');
            for(let i = 0; i < segments.length; i++){
                const isLast = segments.length - 1 === i;
                const segment = segments[i];
                if (isLast) {
                    currentRef[segment] = true;
                } else {
                    if (!(segment in currentRef)) {
                        currentRef[segment] = {};
                        currentRef = currentRef[segment];
                    }
                }
            }
        }
    }
    return select;
}; //# sourceMappingURL=sanitizeSelect.js.map
}),
"[project]/node_modules/.pnpm/payload@3.64.0_graphql@16.12.0_typescript@5.5.2/node_modules/payload/dist/utilities/checkDocumentLockStatus.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "checkDocumentLockStatus",
    ()=>checkDocumentLockStatus
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$64$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$5$2e$2$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$Locked$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.64.0_graphql@16.12.0_typescript@5.5.2/node_modules/payload/dist/errors/Locked.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$64$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$5$2e$2$2f$node_modules$2f$payload$2f$dist$2f$locked$2d$documents$2f$config$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.64.0_graphql@16.12.0_typescript@5.5.2/node_modules/payload/dist/locked-documents/config.js [app-rsc] (ecmascript)");
;
;
const checkDocumentLockStatus = async ({ id, collectionSlug, globalSlug, lockDurationDefault = 300, lockErrorMessage, overrideLock = true, req })=>{
    const { payload } = req;
    // Retrieve the lockDocuments property for either collection or global
    const lockDocumentsProp = collectionSlug ? payload.collections?.[collectionSlug]?.config?.lockDocuments : payload.config?.globals?.find((g)=>g.slug === globalSlug)?.lockDocuments;
    const isLockingEnabled = lockDocumentsProp !== false;
    let lockedDocumentQuery = {};
    if (collectionSlug) {
        lockedDocumentQuery = {
            and: [
                {
                    'document.relationTo': {
                        equals: collectionSlug
                    }
                },
                {
                    'document.value': {
                        equals: id
                    }
                }
            ]
        };
    } else if (globalSlug) {
        lockedDocumentQuery = {
            globalSlug: {
                equals: globalSlug
            }
        };
    } else {
        throw new Error('Either collectionSlug or globalSlug must be provided.');
    }
    if (!isLockingEnabled) {
        return;
    }
    // Only perform lock checks if overrideLock is false and locking is enabled
    if (!overrideLock) {
        const defaultLockErrorMessage = collectionSlug ? `Document with ID ${id} is currently locked by another user and cannot be modified.` : `Global document with slug "${globalSlug}" is currently locked by another user and cannot be modified.`;
        const finalLockErrorMessage = lockErrorMessage || defaultLockErrorMessage;
        const lockedDocumentResult = await payload.db.find({
            collection: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$64$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$5$2e$2$2f$node_modules$2f$payload$2f$dist$2f$locked$2d$documents$2f$config$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["lockedDocumentsCollectionSlug"],
            limit: 1,
            pagination: false,
            sort: '-updatedAt',
            where: lockedDocumentQuery
        });
        // If there's a locked document, check lock conditions
        const lockedDoc = lockedDocumentResult?.docs[0];
        if (lockedDoc) {
            const lastEditedAt = new Date(lockedDoc?.updatedAt).getTime();
            const now = new Date().getTime();
            const lockDuration = typeof lockDocumentsProp === 'object' ? lockDocumentsProp.duration : lockDurationDefault;
            const lockDurationInMilliseconds = lockDuration * 1000;
            const currentUserId = req.user?.id;
            // document is locked by another user and the lock hasn't expired
            if (lockedDoc.user?.value !== currentUserId && now - lastEditedAt <= lockDurationInMilliseconds) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$64$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$5$2e$2$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$Locked$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Locked"](finalLockErrorMessage);
            }
        }
    }
    // Perform the delete operation regardless of overrideLock status
    await payload.db.deleteMany({
        collection: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$64$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$5$2e$2$2f$node_modules$2f$payload$2f$dist$2f$locked$2d$documents$2f$config$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["lockedDocumentsCollectionSlug"],
        // Not passing req fails on postgres
        req: payload.db.name === 'mongoose' ? undefined : req,
        where: lockedDocumentQuery
    });
}; //# sourceMappingURL=checkDocumentLockStatus.js.map
}),
"[project]/node_modules/.pnpm/payload@3.64.0_graphql@16.12.0_typescript@5.5.2/node_modules/payload/dist/utilities/flattenTopLevelFields.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "flattenTopLevelFields",
    ()=>flattenTopLevelFields
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$translations$40$3$2e$64$2e$0$2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$utilities$2f$getTranslation$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@payloadcms+translations@3.64.0/node_modules/@payloadcms/translations/dist/utilities/getTranslation.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$64$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$5$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.64.0_graphql@16.12.0_typescript@5.5.2/node_modules/payload/dist/fields/config/types.js [app-rsc] (ecmascript)");
;
;
function flattenTopLevelFields(fields = [], options) {
    const normalizedOptions = typeof options === 'boolean' ? {
        keepPresentationalFields: options
    } : options ?? {};
    const { i18n, keepPresentationalFields, labelPrefix, moveSubFieldsToTop = false, pathPrefix } = normalizedOptions;
    return fields.reduce((acc, field)=>{
        // If a group field has subfields and has a name, otherwise we catch it below along with collapsible and row fields
        if (field.type === 'group' && 'fields' in field) {
            if (moveSubFieldsToTop) {
                const isNamedGroup = 'name' in field && typeof field.name === 'string' && !!field.name;
                const groupName = 'name' in field ? field.name : undefined;
                const translatedLabel = 'label' in field && field.label && i18n ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$translations$40$3$2e$64$2e$0$2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$utilities$2f$getTranslation$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTranslation"])(field.label, i18n) : undefined;
                const labelWithPrefix = labelPrefix ? `${labelPrefix} > ${translatedLabel ?? groupName}` : translatedLabel ?? groupName;
                const nameWithPrefix = 'name' in field && field.name ? pathPrefix ? `${pathPrefix}.${field.name}` : field.name : pathPrefix;
                acc.push(// so that `buildColumnState` can detect and render a column if the group
                // has a custom admin Cell component defined in its configuration.
                // See: packages/ui/src/providers/TableColumns/buildColumnState/index.tsx
                field, ...flattenTopLevelFields(field.fields, {
                    i18n,
                    keepPresentationalFields,
                    labelPrefix: isNamedGroup ? labelWithPrefix : labelPrefix,
                    moveSubFieldsToTop,
                    pathPrefix: isNamedGroup ? nameWithPrefix : pathPrefix
                }));
            } else {
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$64$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$5$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fieldAffectsData"])(field)) {
                    // Hoisting diabled - keep as top level field
                    acc.push(field);
                } else {
                    acc.push(...flattenTopLevelFields(field.fields, options));
                }
            }
        } else if (field.type === 'tabs' && 'tabs' in field) {
            return [
                ...acc,
                ...field.tabs.reduce((tabFields, tab)=>{
                    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$64$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$5$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["tabHasName"])(tab)) {
                        if (moveSubFieldsToTop) {
                            const translatedLabel = 'label' in tab && tab.label && i18n ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$translations$40$3$2e$64$2e$0$2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$utilities$2f$getTranslation$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTranslation"])(tab.label, i18n) : undefined;
                            const labelWithPrefixForTab = labelPrefix ? `${labelPrefix} > ${translatedLabel ?? tab.name}` : translatedLabel ?? tab.name;
                            const pathPrefixForTab = tab.name ? pathPrefix ? `${pathPrefix}.${tab.name}` : tab.name : pathPrefix;
                            return [
                                ...tabFields,
                                ...flattenTopLevelFields(tab.fields, {
                                    i18n,
                                    keepPresentationalFields,
                                    labelPrefix: labelWithPrefixForTab,
                                    moveSubFieldsToTop,
                                    pathPrefix: pathPrefixForTab
                                })
                            ];
                        } else {
                            // Named tab, hoisting disabled: keep as top-level field
                            return [
                                ...tabFields,
                                {
                                    ...tab,
                                    type: 'tab'
                                }
                            ];
                        }
                    } else {
                        // Unnamed tab: always hoist its fields
                        return [
                            ...tabFields,
                            ...flattenTopLevelFields(tab.fields, options)
                        ];
                    }
                }, [])
            ];
        } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$64$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$5$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fieldHasSubFields"])(field) && [
            'collapsible',
            'row'
        ].includes(field.type)) {
            // Recurse into row and collapsible
            acc.push(...flattenTopLevelFields(field.fields, options));
        } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$64$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$5$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fieldAffectsData"])(field) || keepPresentationalFields && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$64$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$5$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fieldIsPresentationalOnly"])(field)) {
            // Ignore nested `id` fields when inside nested structure
            if (field.name === 'id' && labelPrefix !== undefined) {
                return acc;
            }
            const translatedLabel = 'label' in field && field.label && i18n ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$translations$40$3$2e$64$2e$0$2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$utilities$2f$getTranslation$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTranslation"])(field.label, i18n) : undefined;
            const name = 'name' in field ? field.name : undefined;
            const isHoistingFromGroup = pathPrefix !== undefined || labelPrefix !== undefined;
            acc.push({
                ...field,
                ...moveSubFieldsToTop && isHoistingFromGroup && {
                    accessor: pathPrefix && name ? `${pathPrefix}.${name}` : name ?? '',
                    labelWithPrefix: labelPrefix ? `${labelPrefix} > ${translatedLabel ?? name}` : translatedLabel ?? name
                }
            });
        }
        return acc;
    }, []);
} //# sourceMappingURL=flattenTopLevelFields.js.map
}),
"[project]/node_modules/.pnpm/payload@3.64.0_graphql@16.12.0_typescript@5.5.2/node_modules/payload/dist/utilities/extractID.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "extractID",
    ()=>extractID
]);
const extractID = (objectOrID)=>{
    if (typeof objectOrID === 'string' || typeof objectOrID === 'number') {
        return objectOrID;
    }
    return objectOrID.id;
}; //# sourceMappingURL=extractID.js.map
}),
"[project]/node_modules/.pnpm/payload@3.64.0_graphql@16.12.0_typescript@5.5.2/node_modules/payload/dist/utilities/transformWhereQuery.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Transforms a basic "where" query into a format in which the "where builder" can understand.
 * Even though basic queries are valid, we need to hoist them into the "and" / "or" format.
 * Use this function alongside `validateWhereQuery` to check that for valid queries before transforming.
 * @example
 * Inaccurate: [text][equals]=example%20post
 * Accurate: [or][0][and][0][text][equals]=example%20post
 */ __turbopack_context__.s([
    "transformWhereQuery",
    ()=>transformWhereQuery
]);
const transformWhereQuery = (whereQuery)=>{
    if (!whereQuery) {
        return {};
    }
    // Check if 'whereQuery' has 'or' field but no 'and'. This is the case for "correct" queries
    if (whereQuery.or && !whereQuery.and) {
        return {
            or: whereQuery.or.map((query)=>{
                // ...but if the or query does not have an and, we need to add it
                if (!query.and) {
                    return {
                        and: [
                            query
                        ]
                    };
                }
                return query;
            })
        };
    }
    // Check if 'whereQuery' has 'and' field but no 'or'.
    if (whereQuery.and && !whereQuery.or) {
        return {
            or: [
                {
                    and: whereQuery.and
                }
            ]
        };
    }
    // Check if 'whereQuery' has neither 'or' nor 'and'.
    if (!whereQuery.or && !whereQuery.and) {
        return {
            or: [
                {
                    and: [
                        whereQuery
                    ]
                }
            ]
        };
    }
    // If 'whereQuery' has 'or' and 'and', just return it as it is.
    return whereQuery;
}; //# sourceMappingURL=transformWhereQuery.js.map
}),
"[project]/node_modules/.pnpm/payload@3.64.0_graphql@16.12.0_typescript@5.5.2/node_modules/payload/dist/utilities/validateWhereQuery.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "validateWhereQuery",
    ()=>validateWhereQuery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$64$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$5$2e$2$2f$node_modules$2f$payload$2f$dist$2f$types$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.64.0_graphql@16.12.0_typescript@5.5.2/node_modules/payload/dist/types/constants.js [app-rsc] (ecmascript)");
;
const validateWhereQuery = (whereQuery)=>{
    if (whereQuery?.or && (whereQuery?.or?.length === 0 || whereQuery?.or?.length > 0 && whereQuery?.or?.[0]?.and && whereQuery?.or?.[0]?.and?.length > 0)) {
        // At this point we know that the whereQuery has 'or' and 'and' fields,
        // now let's check the structure and content of these fields.
        const isValid = whereQuery.or.every((orQuery)=>{
            if (orQuery.and && Array.isArray(orQuery.and)) {
                return orQuery.and.every((andQuery)=>{
                    if (typeof andQuery !== 'object') {
                        return false;
                    }
                    const andKeys = Object.keys(andQuery);
                    // If there are no keys, it's not a valid WhereField.
                    if (andKeys.length === 0) {
                        return false;
                    }
                    for (const key of andKeys){
                        const operator = Object.keys(andQuery[key])[0];
                        // Check if the key is a valid Operator.
                        if (!operator || !__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$64$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$5$2e$2$2f$node_modules$2f$payload$2f$dist$2f$types$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["validOperatorSet"].has(operator)) {
                            return false;
                        }
                    }
                    return true;
                });
            }
            return false;
        });
        return isValid;
    }
    return false;
}; //# sourceMappingURL=validateWhereQuery.js.map
}),
"[project]/node_modules/.pnpm/payload@3.64.0_graphql@16.12.0_typescript@5.5.2/node_modules/payload/dist/utilities/traverseFields.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "traverseFields",
    ()=>traverseFields
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$64$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$5$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.64.0_graphql@16.12.0_typescript@5.5.2/node_modules/payload/dist/fields/config/types.js [app-rsc] (ecmascript)");
;
const traverseArrayOrBlocksField = ({ callback, callbackStack, config, data, field, fillEmpty, leavesFirst, parentIsLocalized, parentPath, parentRef })=>{
    if (fillEmpty) {
        if (field.type === 'array') {
            traverseFields({
                callback,
                callbackStack,
                config,
                fields: field.fields,
                isTopLevel: false,
                leavesFirst,
                parentIsLocalized: parentIsLocalized || field.localized,
                parentPath: `${parentPath}${field.name}.`,
                parentRef
            });
        }
        if (field.type === 'blocks') {
            for (const _block of field.blockReferences ?? field.blocks){
                // TODO: iterate over blocks mapped to block slug in v4, or pass through payload.blocks
                const block = typeof _block === 'string' ? config?.blocks?.find((b)=>b.slug === _block) : _block;
                if (block) {
                    traverseFields({
                        callback,
                        callbackStack,
                        config,
                        fields: block.fields,
                        isTopLevel: false,
                        leavesFirst,
                        parentIsLocalized: parentIsLocalized || field.localized,
                        parentPath: `${parentPath}${field.name}.`,
                        parentRef
                    });
                }
            }
        }
        return;
    }
    for (const ref of data){
        let fields;
        if (field.type === 'blocks' && typeof ref?.blockType === 'string') {
            // TODO: iterate over blocks mapped to block slug in v4, or pass through payload.blocks
            const block = field.blockReferences ? config?.blocks?.find((b)=>b.slug === ref.blockType) ?? field.blockReferences.find((b)=>typeof b !== 'string' && b.slug === ref.blockType) : field.blocks.find((b)=>b.slug === ref.blockType);
            fields = block?.fields;
        } else if (field.type === 'array') {
            fields = field.fields;
        }
        if (fields) {
            traverseFields({
                callback,
                callbackStack,
                config,
                fields,
                fillEmpty,
                isTopLevel: false,
                leavesFirst,
                parentIsLocalized: parentIsLocalized || field.localized,
                parentPath: `${parentPath}${field.name}.`,
                parentRef,
                ref
            });
        }
    }
};
const traverseFields = ({ callback, callbackStack: _callbackStack = [], config, fields, fillEmpty = true, isTopLevel = true, leavesFirst = false, parentIsLocalized, parentPath = '', parentRef = {}, ref = {} })=>{
    const fieldsMatched = fields.some((field)=>{
        let callbackStack = [];
        if (!isTopLevel) {
            callbackStack = _callbackStack;
        }
        let skip = false;
        const next = ()=>{
            skip = true;
        };
        if (!ref || typeof ref !== 'object') {
            return;
        }
        if (!leavesFirst && callback && callback({
            field,
            next,
            parentIsLocalized: parentIsLocalized,
            parentPath,
            parentRef,
            ref
        })) {
            return true;
        } else if (leavesFirst) {
            callbackStack.push(()=>callback({
                    field,
                    next,
                    parentIsLocalized: parentIsLocalized,
                    parentPath,
                    parentRef,
                    ref
                }));
        }
        if (skip) {
            return false;
        }
        // avoid mutation of ref for all fields
        let currentRef = ref;
        let currentParentRef = parentRef;
        if (field.type === 'tabs' && 'tabs' in field) {
            for (const tab of field.tabs){
                let tabRef = ref;
                if (skip) {
                    return false;
                }
                if ('name' in tab && tab.name) {
                    if (!ref[tab.name] || typeof ref[tab.name] !== 'object') {
                        if (fillEmpty) {
                            if (tab.localized) {
                                ;
                                ref[tab.name] = {
                                    en: {}
                                };
                            } else {
                                ;
                                ref[tab.name] = {};
                            }
                        } else {
                            continue;
                        }
                    }
                    if (callback && !leavesFirst && callback({
                        field: {
                            ...tab,
                            type: 'tab'
                        },
                        next,
                        parentIsLocalized: parentIsLocalized,
                        parentPath,
                        parentRef: currentParentRef,
                        ref: tabRef
                    })) {
                        return true;
                    } else if (leavesFirst) {
                        callbackStack.push(()=>callback({
                                field: {
                                    ...tab,
                                    type: 'tab'
                                },
                                next,
                                parentIsLocalized: parentIsLocalized,
                                parentPath,
                                parentRef: currentParentRef,
                                ref: tabRef
                            }));
                    }
                    tabRef = tabRef[tab.name];
                    if (tab.localized) {
                        for(const key in tabRef){
                            if (tabRef[key] && typeof tabRef[key] === 'object') {
                                traverseFields({
                                    callback,
                                    callbackStack,
                                    config,
                                    fields: tab.fields,
                                    fillEmpty,
                                    isTopLevel: false,
                                    leavesFirst,
                                    parentIsLocalized: true,
                                    parentPath: `${parentPath}${tab.name}.`,
                                    parentRef: currentParentRef,
                                    ref: tabRef[key]
                                });
                            }
                        }
                    }
                } else {
                    if (callback && !leavesFirst && callback({
                        field: {
                            ...tab,
                            type: 'tab'
                        },
                        next,
                        parentIsLocalized: parentIsLocalized,
                        parentPath,
                        parentRef: currentParentRef,
                        ref: tabRef
                    })) {
                        return true;
                    } else if (leavesFirst) {
                        callbackStack.push(()=>callback({
                                field: {
                                    ...tab,
                                    type: 'tab'
                                },
                                next,
                                parentIsLocalized: parentIsLocalized,
                                parentPath,
                                parentRef: currentParentRef,
                                ref: tabRef
                            }));
                    }
                }
                if (!tab.localized) {
                    traverseFields({
                        callback,
                        callbackStack,
                        config,
                        fields: tab.fields,
                        fillEmpty,
                        isTopLevel: false,
                        leavesFirst,
                        parentIsLocalized: false,
                        parentPath: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$64$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$5$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["tabHasName"])(tab) ? `${parentPath}${tab.name}` : parentPath,
                        parentRef: currentParentRef,
                        ref: tabRef
                    });
                }
                if (skip) {
                    return false;
                }
            }
            return;
        }
        if (field.type === 'tab' || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$64$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$5$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fieldHasSubFields"])(field) || field.type === 'blocks') {
            if ('name' in field && field.name) {
                currentParentRef = currentRef;
                if (!ref[field.name]) {
                    if (fillEmpty) {
                        if (field.type === 'group' || field.type === 'tab') {
                            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$64$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$5$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fieldShouldBeLocalized"])({
                                field,
                                parentIsLocalized: parentIsLocalized
                            })) {
                                ;
                                ref[field.name] = {
                                    en: {}
                                };
                            } else {
                                ;
                                ref[field.name] = {};
                            }
                        } else if (field.type === 'array' || field.type === 'blocks') {
                            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$64$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$5$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fieldShouldBeLocalized"])({
                                field,
                                parentIsLocalized: parentIsLocalized
                            })) {
                                ;
                                ref[field.name] = {
                                    en: []
                                };
                            } else {
                                ;
                                ref[field.name] = [];
                            }
                        }
                    } else {
                        return;
                    }
                }
                currentRef = ref[field.name];
            }
            if ((field.type === 'tab' || field.type === 'group') && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$64$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$5$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fieldShouldBeLocalized"])({
                field,
                parentIsLocalized: parentIsLocalized
            }) && currentRef && typeof currentRef === 'object') {
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$64$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$5$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fieldAffectsData"])(field)) {
                    for(const key in currentRef){
                        if (currentRef[key]) {
                            traverseFields({
                                callback,
                                callbackStack,
                                config,
                                fields: field.fields,
                                fillEmpty,
                                isTopLevel: false,
                                leavesFirst,
                                parentIsLocalized: true,
                                parentPath: field.name ? `${parentPath}${field.name}.` : parentPath,
                                parentRef: currentParentRef,
                                ref: currentRef[key]
                            });
                        }
                    }
                } else {
                    traverseFields({
                        callback,
                        callbackStack,
                        config,
                        fields: field.fields,
                        fillEmpty,
                        isTopLevel: false,
                        leavesFirst,
                        parentIsLocalized,
                        parentRef: currentParentRef,
                        ref: currentRef
                    });
                }
                return;
            }
            if ((field.type === 'blocks' || field.type === 'array') && currentRef && typeof currentRef === 'object') {
                // TODO: `?? field.localized ?? false` shouldn't be necessary, but right now it
                // is so that all fields are correctly traversed in copyToLocale and
                // therefore pass the localization integration tests.
                // I tried replacing the `!parentIsLocalized` condition with `parentIsLocalized === false`
                // in `fieldShouldBeLocalized`, but several tests failed. We must be calling it with incorrect
                // parameters somewhere.
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$64$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$5$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fieldShouldBeLocalized"])({
                    field,
                    parentIsLocalized: parentIsLocalized ?? false
                })) {
                    if (Array.isArray(currentRef)) {
                        traverseArrayOrBlocksField({
                            callback,
                            callbackStack,
                            config,
                            data: currentRef,
                            field,
                            fillEmpty,
                            leavesFirst,
                            parentIsLocalized: true,
                            parentPath,
                            parentRef: currentParentRef
                        });
                    } else {
                        for(const key in currentRef){
                            const localeData = currentRef[key];
                            if (!Array.isArray(localeData)) {
                                continue;
                            }
                            traverseArrayOrBlocksField({
                                callback,
                                callbackStack,
                                config,
                                data: localeData,
                                field,
                                fillEmpty,
                                leavesFirst,
                                parentIsLocalized: true,
                                parentPath,
                                parentRef: currentParentRef
                            });
                        }
                    }
                } else if (Array.isArray(currentRef)) {
                    traverseArrayOrBlocksField({
                        callback,
                        callbackStack,
                        config,
                        data: currentRef,
                        field,
                        fillEmpty,
                        leavesFirst,
                        parentIsLocalized: parentIsLocalized,
                        parentPath,
                        parentRef: currentParentRef
                    });
                }
            } else if (currentRef && typeof currentRef === 'object' && 'fields' in field) {
                traverseFields({
                    callback,
                    callbackStack,
                    config,
                    fields: field.fields,
                    fillEmpty,
                    isTopLevel: false,
                    leavesFirst,
                    parentIsLocalized,
                    parentPath: 'name' in field && field.name ? `${parentPath}${field.name}.` : parentPath,
                    parentRef: currentParentRef,
                    ref: currentRef
                });
            }
        }
        if (isTopLevel) {
            callbackStack.reverse().forEach((cb)=>{
                cb();
            });
        }
    });
    // Fallback: Handle dot-notation paths when no fields matched
    if (!fieldsMatched && ref && typeof ref === 'object') {
        Object.keys(ref).forEach((key)=>{
            if (key.includes('.')) {
                // Split on first dot only
                const firstDotIndex = key.indexOf('.');
                const fieldName = key.substring(0, firstDotIndex);
                const remainingPath = key.substring(firstDotIndex + 1);
                // Create nested structure for this field
                if (!ref[fieldName]) {
                    ;
                    ref[fieldName] = {};
                }
                const nestedRef = ref[fieldName];
                // Move the value to the nested structure
                nestedRef[remainingPath] = ref[key];
                delete ref[key];
                // Recursively process the newly created nested structure
                // The field traversal will naturally handle it if the field exists in the schema
                traverseFields({
                    callback,
                    callbackStack: _callbackStack,
                    config,
                    fields,
                    fillEmpty,
                    isTopLevel: false,
                    leavesFirst,
                    parentIsLocalized,
                    parentPath,
                    parentRef,
                    ref
                });
            }
        });
    }
}; //# sourceMappingURL=traverseFields.js.map
}),
"[project]/node_modules/.pnpm/payload@3.64.0_graphql@16.12.0_typescript@5.5.2/node_modules/payload/dist/utilities/logError.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "logError",
    ()=>logError
]);
const logError = ({ err, payload })=>{
    let level = 'error';
    if (err && typeof err === 'object' && 'name' in err && typeof err.name === 'string' && typeof payload.config.loggingLevels[err.name] !== 'undefined') {
        level = payload.config.loggingLevels[err.name];
    }
    if (level) {
        const logObject = {};
        if (level === 'info') {
            logObject.msg = typeof err === 'object' && 'message' in err ? err.message : 'Error';
        } else {
            logObject.err = err;
        }
        payload.logger[level](logObject);
    }
}; //# sourceMappingURL=logError.js.map
}),
"[project]/node_modules/.pnpm/payload@3.64.0_graphql@16.12.0_typescript@5.5.2/node_modules/payload/dist/utilities/mergeHeaders.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "mergeHeaders",
    ()=>mergeHeaders
]);
const mergeHeaders = (sourceHeaders, destinationHeaders)=>{
    // Create a new Headers object
    const combinedHeaders = new Headers(destinationHeaders);
    // Append sourceHeaders to combinedHeaders
    sourceHeaders.forEach((value, key)=>{
        combinedHeaders.append(key, value);
    });
    return combinedHeaders;
}; //# sourceMappingURL=mergeHeaders.js.map
}),
"[project]/node_modules/.pnpm/payload@3.64.0_graphql@16.12.0_typescript@5.5.2/node_modules/payload/dist/utilities/isNextBuild.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Utility function to determine if the code is being executed during the Next.js build process.
 */ __turbopack_context__.s([
    "isNextBuild",
    ()=>isNextBuild
]);
function isNextBuild() {
    return process.env.NEXT_PHASE === 'phase-production-build' || process.env.npm_lifecycle_event === 'build';
} //# sourceMappingURL=isNextBuild.js.map
}),
"[project]/node_modules/.pnpm/payload@3.64.0_graphql@16.12.0_typescript@5.5.2/node_modules/payload/dist/utilities/logger.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "defaultLoggerOptions",
    ()=>defaultLoggerOptions,
    "getLogger",
    ()=>getLogger,
    "prettySyncLoggerDestination",
    ()=>prettySyncLoggerDestination
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pino$40$9$2e$14$2e$0$2f$node_modules$2f$pino$2f$pino$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pino@9.14.0/node_modules/pino/pino.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pino$2d$pretty$40$13$2e$1$2e$2$2f$node_modules$2f$pino$2d$pretty$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/pino-pretty@13.1.2/node_modules/pino-pretty/index.js [app-rsc] (ecmascript)");
;
;
const prettyOptions = {
    colorize: true,
    ignore: 'pid,hostname',
    translateTime: 'SYS:HH:MM:ss'
};
const prettySyncLoggerDestination = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pino$2d$pretty$40$13$2e$1$2e$2$2f$node_modules$2f$pino$2d$pretty$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["build"])({
    ...prettyOptions,
    destination: 1,
    sync: true
});
const defaultLoggerOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pino$2d$pretty$40$13$2e$1$2e$2$2f$node_modules$2f$pino$2d$pretty$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["build"])(prettyOptions);
const getLogger = (name = 'payload', logger)=>{
    if (!logger) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pino$40$9$2e$14$2e$0$2f$node_modules$2f$pino$2f$pino$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pino"])(defaultLoggerOptions);
    }
    // Synchronous logger used by bin scripts
    if (logger === 'sync') {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pino$40$9$2e$14$2e$0$2f$node_modules$2f$pino$2f$pino$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pino"])(prettySyncLoggerDestination);
    }
    // Check if logger is an object
    if ('options' in logger) {
        const { destination, options } = logger;
        if (!options.name) {
            options.name = name;
        }
        if (!options.enabled) {
            options.enabled = process.env.DISABLE_LOGGING !== 'true';
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pino$40$9$2e$14$2e$0$2f$node_modules$2f$pino$2f$pino$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pino"])(options, destination);
    } else {
        // Instantiated logger
        return logger;
    }
}; //# sourceMappingURL=logger.js.map
}),
"[project]/node_modules/.pnpm/payload@3.64.0_graphql@16.12.0_typescript@5.5.2/node_modules/payload/dist/utilities/telemetry/events/serverInit.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "serverInit",
    ()=>serverInit
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$64$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$5$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$telemetry$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.64.0_graphql@16.12.0_typescript@5.5.2/node_modules/payload/dist/utilities/telemetry/index.js [app-rsc] (ecmascript)");
;
const serverInit = (payload)=>{
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$64$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$5$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$telemetry$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sendEvent"])({
        event: {
            type: 'server-init'
        },
        payload
    });
}; //# sourceMappingURL=serverInit.js.map
}),
"[project]/node_modules/.pnpm/payload@3.64.0_graphql@16.12.0_typescript@5.5.2/node_modules/payload/dist/utilities/getRequestLanguage.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getRequestLanguage",
    ()=>getRequestLanguage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$translations$40$3$2e$64$2e$0$2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$utilities$2f$languages$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@payloadcms+translations@3.64.0/node_modules/@payloadcms/translations/dist/utilities/languages.js [app-rsc] (ecmascript)");
;
const getRequestLanguage = ({ config, cookies, headers })=>{
    const supportedLanguageKeys = Object.keys(config.i18n.supportedLanguages);
    const langCookie = cookies.get(`${config.cookiePrefix || 'payload'}-lng`);
    const languageFromCookie = typeof langCookie === 'string' ? langCookie : langCookie?.value;
    if (languageFromCookie && supportedLanguageKeys.includes(languageFromCookie)) {
        return languageFromCookie;
    }
    const languageFromHeader = headers.get('Accept-Language') ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$translations$40$3$2e$64$2e$0$2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$utilities$2f$languages$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["extractHeaderLanguage"])(headers.get('Accept-Language')) : undefined;
    if (languageFromHeader && supportedLanguageKeys.includes(languageFromHeader)) {
        return languageFromHeader;
    }
    return config.i18n.fallbackLanguage;
}; //# sourceMappingURL=getRequestLanguage.js.map
}),
"[project]/node_modules/.pnpm/payload@3.64.0_graphql@16.12.0_typescript@5.5.2/node_modules/payload/dist/utilities/createPayloadRequest.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createPayloadRequest",
    ()=>createPayloadRequest
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$translations$40$3$2e$64$2e$0$2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$utilities$2f$init$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@payloadcms+translations@3.64.0/node_modules/@payloadcms/translations/dist/utilities/init.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$qs$2d$esm$40$7$2e$0$2e$2$2f$node_modules$2f$qs$2d$esm$2f$lib$2f$parse$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/qs-esm@7.0.2/node_modules/qs-esm/lib/parse.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$64$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$5$2e$2$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$executeAuthStrategies$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.64.0_graphql@16.12.0_typescript@5.5.2/node_modules/payload/dist/auth/executeAuthStrategies.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$64$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$5$2e$2$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$dataloader$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.64.0_graphql@16.12.0_typescript@5.5.2/node_modules/payload/dist/collections/dataloader.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$64$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$5$2e$2$2f$node_modules$2f$payload$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.64.0_graphql@16.12.0_typescript@5.5.2/node_modules/payload/dist/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$64$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$5$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$addLocalesToRequest$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.64.0_graphql@16.12.0_typescript@5.5.2/node_modules/payload/dist/utilities/addLocalesToRequest.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$64$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$5$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$getRequestLanguage$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.64.0_graphql@16.12.0_typescript@5.5.2/node_modules/payload/dist/utilities/getRequestLanguage.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$64$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$5$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$parseCookies$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.64.0_graphql@16.12.0_typescript@5.5.2/node_modules/payload/dist/utilities/parseCookies.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
const createPayloadRequest = async ({ canSetHeaders, config: configPromise, params, request })=>{
    const cookies = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$64$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$5$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$parseCookies$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseCookies"])(request.headers);
    const payload = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$64$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$5$2e$2$2f$node_modules$2f$payload$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getPayload"])({
        config: configPromise,
        cron: true
    });
    const { config } = payload;
    const localization = config.localization;
    const urlProperties = new URL(request.url);
    const { pathname, searchParams } = urlProperties;
    const isGraphQL = !config.graphQL.disable && pathname === `${config.routes.api}${config.routes.graphQL}`;
    const language = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$64$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$5$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$getRequestLanguage$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRequestLanguage"])({
        config,
        cookies,
        headers: request.headers
    });
    const i18n = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$translations$40$3$2e$64$2e$0$2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$utilities$2f$init$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["initI18n"])({
        config: config.i18n,
        context: 'api',
        language
    });
    let locale = searchParams.get('locale');
    const { search: queryToParse } = urlProperties;
    const query = queryToParse ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$qs$2d$esm$40$7$2e$0$2e$2$2f$node_modules$2f$qs$2d$esm$2f$lib$2f$parse$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parse"](queryToParse, {
        arrayLimit: 1000,
        depth: 10,
        ignoreQueryPrefix: true
    }) : {};
    const fallbackFromRequest = query.fallbackLocale || searchParams.get('fallback-locale') || searchParams.get('fallbackLocale');
    let fallbackLocale = fallbackFromRequest;
    if (localization) {
        const locales = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$64$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$5$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$addLocalesToRequest$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sanitizeLocales"])({
            fallbackLocale: fallbackLocale,
            locale: locale,
            localization
        });
        fallbackLocale = locales.fallbackLocale;
        locale = locales.locale;
    }
    const customRequest = {
        context: {},
        fallbackLocale: fallbackLocale,
        hash: urlProperties.hash,
        host: urlProperties.host,
        href: urlProperties.href,
        i18n,
        locale,
        origin: urlProperties.origin,
        pathname: urlProperties.pathname,
        payload,
        payloadAPI: isGraphQL ? 'GraphQL' : 'REST',
        payloadDataLoader: undefined,
        payloadUploadSizes: {},
        port: urlProperties.port,
        protocol: urlProperties.protocol,
        query,
        routeParams: params || {},
        search: urlProperties.search,
        searchParams: urlProperties.searchParams,
        t: i18n.t,
        transactionID: undefined,
        user: null
    };
    const req = Object.assign(request, customRequest);
    req.payloadDataLoader = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$64$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$5$2e$2$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$dataloader$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getDataLoader"])(req);
    const { responseHeaders, user } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$64$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$5$2e$2$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$executeAuthStrategies$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["executeAuthStrategies"])({
        canSetHeaders,
        headers: req.headers,
        isGraphQL,
        payload
    });
    req.user = user;
    if (responseHeaders) {
        req.responseHeaders = responseHeaders;
    }
    return req;
}; //# sourceMappingURL=createPayloadRequest.js.map
}),
"[project]/node_modules/.pnpm/payload@3.64.0_graphql@16.12.0_typescript@5.5.2/node_modules/payload/dist/utilities/canAccessAdmin.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Protects admin-only routes, server functions, etc.
 * The requesting user must either:
 * a. pass the `access.admin` function on the `users` collection, if defined
 * b. match the `config.admin.user` property on the Payload config
 * c. if no user is present, and there are no users in the system, allow access (for first user creation)
 * @throws {Error} Throws an `Unauthorized` error if access is denied that can be explicitly caught
 */ __turbopack_context__.s([
    "canAccessAdmin",
    ()=>canAccessAdmin
]);
const canAccessAdmin = async ({ req })=>{
    const incomingUserSlug = req.user?.collection;
    const adminUserSlug = req.payload.config.admin.user;
    if (incomingUserSlug) {
        const adminAccessFn = req.payload.collections[incomingUserSlug]?.config.access?.admin;
        if (adminAccessFn) {
            const canAccess = await adminAccessFn({
                req
            });
            if (!canAccess) {
                throw new Error('Unauthorized');
            }
        // Match the user collection to the global admin config
        } else if (adminUserSlug !== incomingUserSlug) {
            throw new Error('Unauthorized');
        }
    } else {
        const hasUsers = await req.payload.find({
            collection: adminUserSlug,
            depth: 0,
            limit: 1,
            pagination: false
        });
        // If there are users, we should not allow access because of `/create-first-user`
        if (hasUsers.docs.length) {
            throw new Error('Unauthorized');
        }
    }
}; //# sourceMappingURL=canAccessAdmin.js.map
}),
"[project]/node_modules/.pnpm/payload@3.64.0_graphql@16.12.0_typescript@5.5.2/node_modules/payload/dist/utilities/formatErrors.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "formatErrors",
    ()=>formatErrors
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$64$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$5$2e$2$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.64.0_graphql@16.12.0_typescript@5.5.2/node_modules/payload/dist/errors/APIError.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$64$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$5$2e$2$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$ValidationError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.64.0_graphql@16.12.0_typescript@5.5.2/node_modules/payload/dist/errors/ValidationError.js [app-rsc] (ecmascript)");
;
;
const formatErrors = (incoming)=>{
    if (incoming) {
        // Cannot use `instanceof` to check error type: https://github.com/microsoft/TypeScript/issues/13965
        // Instead, get the prototype of the incoming error and check its constructor name
        const proto = Object.getPrototypeOf(incoming);
        // Payload 'ValidationError' and 'APIError'
        if ((proto.constructor.name === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$64$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$5$2e$2$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$ValidationError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ValidationErrorName"] || proto.constructor.name === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$64$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$5$2e$2$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APIErrorName"]) && incoming.data) {
            return {
                errors: [
                    {
                        name: incoming.name,
                        data: incoming.data,
                        message: incoming.message
                    }
                ]
            };
        }
        // Mongoose 'ValidationError': https://mongoosejs.com/docs/api/error.html#Error.ValidationError
        if (proto.constructor.name === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$64$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$5$2e$2$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$ValidationError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ValidationErrorName"] && 'errors' in incoming && incoming.errors) {
            return {
                errors: Object.keys(incoming.errors).reduce((acc, key)=>{
                    acc.push({
                        field: incoming.errors[key].path,
                        message: incoming.errors[key].message
                    });
                    return acc;
                }, [])
            };
        }
        if (Array.isArray(incoming.message)) {
            return {
                errors: incoming.message
            };
        }
        if (incoming.name) {
            return {
                errors: [
                    {
                        message: incoming.message
                    }
                ]
            };
        }
    }
    return {
        errors: [
            {
                message: 'An unknown error occurred.'
            }
        ]
    };
}; //# sourceMappingURL=formatErrors.js.map
}),
"[project]/node_modules/.pnpm/payload@3.64.0_graphql@16.12.0_typescript@5.5.2/node_modules/payload/dist/utilities/unflatten.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "unflatten",
    ()=>unflatten
]);
/* eslint-disable @typescript-eslint/no-explicit-any */ /*
 * Copyright (c) 2014, Hugh Kennedy
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
 * 1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
 * 3. Neither the name of the nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */ /*
 * Copyright (c) 2020, Feross Aboukhadijeh <https://feross.org>
 * Reference: https://www.npmjs.com/package/is-buffer
 * All rights reserved.
 */ function isBuffer(obj) {
    return obj != null && obj.constructor != null && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj);
}
const unflatten = (target, opts)=>{
    opts = opts || {};
    const delimiter = opts.delimiter || '.';
    const overwrite = opts.overwrite || false;
    const recursive = opts.recursive || false;
    const result = {};
    const isbuffer = isBuffer(target);
    if (isbuffer || Object.prototype.toString.call(target) !== '[object Object]') {
        return target;
    }
    // safely ensure that the key is an integer.
    const getkey = (key)=>{
        const parsedKey = Number(key);
        return isNaN(parsedKey) || key.indexOf('.') !== -1 || opts.object ? key : parsedKey;
    };
    const sortedKeys = Object.keys(target).sort((keyA, keyB)=>keyA.length - keyB.length);
    sortedKeys.forEach((key)=>{
        const split = key.split(delimiter);
        let key1 = getkey(split.shift());
        let key2 = getkey(split[0]);
        let recipient = result;
        while(key2 !== undefined){
            if (key1 === '__proto__') {
                return;
            }
            const type = Object.prototype.toString.call(recipient[key1]);
            const isobject = type === '[object Object]' || type === '[object Array]';
            // do not write over falsey, non-undefined values if overwrite is false
            if (!overwrite && !isobject && typeof recipient[key1] !== 'undefined') {
                return;
            }
            if (overwrite && !isobject || !overwrite && recipient[key1] == null) {
                recipient[key1] = typeof key2 === 'number' && !opts.object ? [] : {};
            }
            recipient = recipient[key1];
            if (split.length > 0) {
                key1 = getkey(split.shift());
                key2 = getkey(split[0]);
            }
        }
        // unflatten again for 'messy objects'
        recipient[key1] = recursive ? unflatten(target[key], opts) : target[key];
    });
    return result;
}; //# sourceMappingURL=unflatten.js.map
}),
"[project]/node_modules/.pnpm/payload@3.64.0_graphql@16.12.0_typescript@5.5.2/node_modules/payload/dist/utilities/reduceFieldsToValues.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "reduceFieldsToValues",
    ()=>reduceFieldsToValues
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$64$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$5$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$unflatten$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.64.0_graphql@16.12.0_typescript@5.5.2/node_modules/payload/dist/utilities/unflatten.js [app-rsc] (ecmascript)");
;
const reduceFieldsToValues = (fields, unflatten, ignoreDisableFormData)=>{
    let data = {};
    if (!fields) {
        return data;
    }
    Object.keys(fields).forEach((key)=>{
        if (ignoreDisableFormData === true || !fields[key]?.disableFormData) {
            data[key] = fields[key]?.value;
        }
    });
    if (unflatten) {
        data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$64$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$5$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$unflatten$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["unflatten"])(data);
    }
    return data;
}; //# sourceMappingURL=reduceFieldsToValues.js.map
}),
"[project]/node_modules/.pnpm/payload@3.64.0_graphql@16.12.0_typescript@5.5.2/node_modules/payload/dist/utilities/applyLocaleFiltering.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "applyLocaleFiltering",
    ()=>applyLocaleFiltering
]);
async function applyLocaleFiltering({ clientConfig, config, req }) {
    if (!clientConfig.localization || !config.localization || typeof config.localization.filterAvailableLocales !== 'function') {
        return;
    }
    const filteredLocales = (await config.localization.filterAvailableLocales({
        locales: config.localization.locales,
        req
    })).map(({ toString, ...rest })=>rest);
    clientConfig.localization.localeCodes = filteredLocales.map(({ code })=>code);
    clientConfig.localization.locales = filteredLocales;
} //# sourceMappingURL=applyLocaleFiltering.js.map
}),
"[project]/node_modules/.pnpm/payload@3.64.0_graphql@16.12.0_typescript@5.5.2/node_modules/payload/dist/utilities/parseDocumentID.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "parseDocumentID",
    ()=>parseDocumentID
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$64$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$5$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$isNumber$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/payload@3.64.0_graphql@16.12.0_typescript@5.5.2/node_modules/payload/dist/utilities/isNumber.js [app-rsc] (ecmascript)");
;
function parseDocumentID({ id, collectionSlug, payload }) {
    const idType = payload.collections[collectionSlug]?.customIDType ?? payload.db.defaultIDType;
    return id ? idType === 'number' && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$64$2e$0_graphql$40$16$2e$12$2e$0_typescript$40$5$2e$5$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$isNumber$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isNumber"])(id) ? parseFloat(String(id)) : id : undefined;
} //# sourceMappingURL=parseDocumentID.js.map
}),
"[project]/node_modules/.pnpm/payload@3.64.0_graphql@16.12.0_typescript@5.5.2/node_modules/payload/dist/utilities/combineWhereConstraints.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "combineWhereConstraints",
    ()=>combineWhereConstraints
]);
function combineWhereConstraints(constraints, as = 'and') {
    if (constraints.length === 0) {
        return {};
    }
    const reducedConstraints = constraints.reduce((acc, constraint)=>{
        if (constraint && typeof constraint === 'object' && Object.keys(constraint).length > 0) {
            if (as in constraint) {
                // merge the objects under the shared key
                acc[as] = [
                    ...acc[as],
                    ...constraint[as]
                ];
            } else {
                // the constraint does not share the key
                acc[as]?.push(constraint);
            }
        }
        return acc;
    }, {
        [as]: []
    });
    if (reducedConstraints[as]?.length === 0) {
        // If there are no constraints, return an empty object
        return {};
    }
    return reducedConstraints;
} //# sourceMappingURL=combineWhereConstraints.js.map
}),
"[project]/node_modules/.pnpm/payload@3.64.0_graphql@16.12.0_typescript@5.5.2/node_modules/payload/dist/utilities/getBestFitFromSizes.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Takes image sizes and a target range and returns the url of the image within that range.
 * If no images fit within the range, it selects the next smallest adequate image, the original,
 * or the largest smaller image if no better fit exists.
 *
 * @param sizes The given FileSizes.
 * @param targetSizeMax The ideal image maximum width. Defaults to 180.
 * @param targetSizeMin The ideal image minimum width. Defaults to 40.
 * @param thumbnailURL The thumbnail url set in config. If passed a url, will return early with it.
 * @param url The url of the original file.
 * @param width The width of the original file.
 * @returns A url of the best fit file.
 */ __turbopack_context__.s([
    "getBestFitFromSizes",
    ()=>getBestFitFromSizes
]);
const getBestFitFromSizes = ({ sizes, targetSizeMax = 180, targetSizeMin = 40, thumbnailURL, url, width })=>{
    if (thumbnailURL) {
        return thumbnailURL;
    }
    if (!sizes) {
        return url;
    }
    const bestFit = Object.values(sizes).reduce((closest, current)=>{
        if (!current.width || current.width < targetSizeMin) {
            return closest;
        }
        if (current.width >= targetSizeMin && current.width <= targetSizeMax) {
            return !closest.width || current.width < closest.width || closest.width < targetSizeMin || closest.width > targetSizeMax ? current : closest;
        }
        if (!closest.width || !closest.original && closest.width < targetSizeMin && current.width > closest.width || closest.width > targetSizeMax && current.width < closest.width) {
            return current;
        }
        return closest;
    }, {
        original: true,
        url,
        width
    });
    return bestFit.url || url;
}; //# sourceMappingURL=getBestFitFromSizes.js.map
}),
"[project]/node_modules/.pnpm/payload@3.64.0_graphql@16.12.0_typescript@5.5.2/node_modules/payload/dist/utilities/mergeListSearchAndWhere.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "hoistQueryParamsToAnd",
    ()=>hoistQueryParamsToAnd,
    "mergeListSearchAndWhere",
    ()=>mergeListSearchAndWhere
]);
const isEmptyObject = (obj)=>Object.keys(obj).length === 0;
const hoistQueryParamsToAnd = (currentWhere, incomingWhere)=>{
    if (isEmptyObject(incomingWhere)) {
        return currentWhere;
    }
    if (isEmptyObject(currentWhere)) {
        return incomingWhere;
    }
    if ('and' in currentWhere && currentWhere.and) {
        currentWhere.and.push(incomingWhere);
    } else if ('or' in currentWhere) {
        currentWhere = {
            and: [
                currentWhere,
                incomingWhere
            ]
        };
    } else {
        currentWhere = {
            and: [
                currentWhere,
                incomingWhere
            ]
        };
    }
    return currentWhere;
};
const mergeListSearchAndWhere = ({ collectionConfig, search, where = {} })=>{
    if (search) {
        let copyOfWhere = {
            ...where || {}
        };
        const searchAsConditions = (collectionConfig.admin.listSearchableFields || [
            collectionConfig.admin?.useAsTitle || 'id'
        ]).map((fieldName)=>({
                [fieldName]: {
                    like: search
                }
            }));
        if (searchAsConditions.length > 0) {
            copyOfWhere = hoistQueryParamsToAnd(copyOfWhere, {
                or: searchAsConditions
            });
        }
        if (!isEmptyObject(copyOfWhere)) {
            where = copyOfWhere;
        }
    }
    return where;
}; //# sourceMappingURL=mergeListSearchAndWhere.js.map
}),
"[project]/node_modules/.pnpm/payload@3.64.0_graphql@16.12.0_typescript@5.5.2/node_modules/payload/dist/utilities/isEntityHidden.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isEntityHidden",
    ()=>isEntityHidden
]);
const isEntityHidden = ({ hidden, user })=>{
    return typeof hidden === 'function' ? hidden({
        user: user
    }) : hidden === true;
}; //# sourceMappingURL=isEntityHidden.js.map
}),
"[project]/node_modules/.pnpm/payload@3.64.0_graphql@16.12.0_typescript@5.5.2/node_modules/payload/dist/utilities/getUniqueListBy.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getUniqueListBy",
    ()=>getUniqueListBy
]);
function getUniqueListBy(arr, key) {
    return [
        ...new Map(arr.map((item)=>[
                item[key],
                item
            ])).values()
    ];
} //# sourceMappingURL=getUniqueListBy.js.map
}),
"[project]/node_modules/.pnpm/payload@3.64.0_graphql@16.12.0_typescript@5.5.2/node_modules/payload/dist/utilities/appendUploadSelectFields.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Mutates the incoming select object to append fields required for upload thumbnails
 * @param collectionConfig
 * @param select
 */ __turbopack_context__.s([
    "appendUploadSelectFields",
    ()=>appendUploadSelectFields
]);
const appendUploadSelectFields = ({ collectionConfig, select })=>{
    if (!collectionConfig.upload || !select) {
        return;
    }
    select.mimeType = true;
    select.thumbnailURL = true;
    if (collectionConfig.upload.imageSizes && collectionConfig.upload.imageSizes.length > 0) {
        if (collectionConfig.upload.adminThumbnail && typeof collectionConfig.upload.adminThumbnail === 'string') {
            /** Only return image size properties that are required to generate the adminThumbnailURL */ select.sizes = {
                [collectionConfig.upload.adminThumbnail]: {
                    filename: true
                }
            };
        } else {
            /** Only return image size properties that are required for thumbnails */ select.sizes = collectionConfig.upload.imageSizes.reduce((acc, imageSizeConfig)=>{
                return {
                    ...acc,
                    [imageSizeConfig.name]: {
                        filename: true,
                        url: true,
                        width: true
                    }
                };
            }, {});
        }
    } else {
        select.url = true;
    }
}; //# sourceMappingURL=appendUploadSelectFields.js.map
}),
"[project]/node_modules/.pnpm/payload@3.64.0_graphql@16.12.0_typescript@5.5.2/node_modules/payload/dist/utilities/transformColumnPreferences.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Transforms various forms of columns into `ColumnPreference[]` which is what is stored in the user's preferences table
 * In React state, for example, columns are stored in in their entirety, including React components: `[{ accessor: 'title', active: true, Label: React.ReactNode, ... }]`
 * In the URL, they are stored as an array of strings: `['title', '-slug']`, where the `-` prefix is used to indicate that the column is inactive
 * However in the database, columns must be in this exact shape: `[{ accessor: 'title', active: true }, { accessor: 'slug', active: false }]`
 * This means that when handling columns, they need to be consistently transformed back and forth
 */ __turbopack_context__.s([
    "transformColumnsToPreferences",
    ()=>transformColumnsToPreferences,
    "transformColumnsToSearchParams",
    ()=>transformColumnsToSearchParams
]);
const transformColumnsToPreferences = (columns)=>{
    if (!columns) {
        return undefined;
    }
    let columnsToTransform = columns;
    // Columns that originate from the URL are a stringified JSON array and need to be parsed first
    if (typeof columns === 'string') {
        try {
            columnsToTransform = JSON.parse(columns);
        } catch (e) {
            console.error('Error parsing columns', columns, e) // eslint-disable-line no-console
            ;
        }
    }
    if (columnsToTransform && Array.isArray(columnsToTransform)) {
        return columnsToTransform.map((col)=>{
            if (typeof col === 'string') {
                const active = col[0] !== '-';
                return {
                    accessor: active ? col : col.slice(1),
                    active
                };
            }
            return {
                accessor: col.accessor,
                active: col.active
            };
        });
    }
};
const transformColumnsToSearchParams = (columns)=>{
    return columns?.map((col)=>col.active ? col.accessor : `-${col.accessor}`);
}; //# sourceMappingURL=transformColumnPreferences.js.map
}),
];

//# sourceMappingURL=c72a0_payload_dist_utilities_1cc8d1aa._.js.map