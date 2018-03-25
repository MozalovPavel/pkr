const _ = require('lodash');
const { values } = require('../constants');

module.exports = {
    getMaxCounter(counters) {
        let maxCount = Math.max.apply(null, counters.map(counter => counter.count));

        return counters.find(counter => counter.count === maxCount);
    },

    getHighCounter(counters, count) {
        return counters = _
            .cloneDeep(counters)
            .reverse()
            .find(counter => counter.count === count);
    },
    
    getCardsCounters(cards) {
        let counters = values.map(value => {
            return { 
                value,
                count: 0
            }
        });
        
        cards.forEach(card => {
            counters[card.value - 2].count++;
        });

        return counters;
    }
};