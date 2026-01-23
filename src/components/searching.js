import {rules, defaultRules, createComparison} from "../lib/compare.js";

export function initSearching(searchField) {
    // @todo: #5.1 — настроить компаратор
    const ruleNames = [defaultRules[1]];
    const customRules = [rules.searchMultipleFields (searchField, ['date', 'customer', 'seller'], false)];
    const comparator = createComparison(ruleNames, customRules);

    return (data, state, action) => {
        // @todo: #5.2 — применить компаратор
        return data.filter(item => comparator(item, state));
    }
}


