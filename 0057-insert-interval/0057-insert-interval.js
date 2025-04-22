/*
  No overlaping
  jump if interval.end < newInterval.start
  |    |
         |   |

    
    Until newInterval.end >= interval.start

    |    |
        |    |

      |   | 
    |   |


  No overlaping, the rest

           |     |
    |   |
*/


/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    const merge = [];
    let i = 0;
    let n = intervals.length;

    while(i < n && intervals[i][1] < newInterval[0]) {
        merge.push(intervals[i]);
        i++;
    }

    while(i < n &&  newInterval[1] >= intervals[i][0]) {
        newInterval[0] = Math.min(newInterval[0], intervals[i][0])
        newInterval[1] = Math.max(newInterval[1], intervals[i][1])
        i++;
    }


    merge.push(newInterval);

    while(i < n) {
        merge.push(intervals[i]);
        i++;
    }

    return merge;
};