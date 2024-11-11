// 十大排序算法:包括冒泡排序、快速排序、希尔排序、选择排序、归并排序、插入排序、堆排序、计数排序、桶排序、基数排序


// 1、冒泡排序  
// 特点：冒泡排序是一种简单的排序算法，它重复地遍历要排序的数列，一次比较两个元素，如果它们的顺序错误就把它们交换过来。
// 遍历数列的工作是重复进行的，直到没有再需要交换的元素为止，这意味着该数列已经排序完成。
const handleBubbleSort = (arr) => {
    const len = arr.length;
    for (let i = 0; i < len - 1; i++) {
        for (let j = 0; j < len - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // 交换元素
                const tmp = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = tmp;
            }
        }
    }
    // 返回排序后的数组
    return arr;
}

// 2、快速排序 
// 特点：快速排序是一种高效的排序算法，它使用分治法策略来把一个序列分为较小和较大的两个子序列，然后递归地排序两个子序列。
const handleQuickSort = (arr) => {
    const sort = (arr, low, high) => {
        if (low >= high) {
            return;
        }

        let i = low;
        let j = high;
        const pivot = arr[i]; // 取出基准值pivot，当前位置i空出，等待填入

        while (i < j) {
            // 从数组尾部，找出比pivot小的数字，并停止在第一个不小于pivot的元素之前
            while (arr[j] >= pivot && i < j) {
                j--;
            }

            // 如果i仍然小于j，说明找到了一个比pivot小的元素，将其放到i的位置
            if (i < j) {
                arr[i] = arr[j];
                i++;
            }

            // 从数组头部，找出比pivot大的数字，并停止在第一个不大于pivot的元素之前
            while (arr[i] <= pivot && i < j) {
                i++;
            }

            // 如果i仍然小于j，说明找到了一个比pivot大的元素，将其放到j的位置
            if (i < j) {
                arr[j] = arr[i];
                j--;
            }
        }

        // 当i和j相遇时，将基准值pivot放到正确的位置上
        arr[i] = pivot;

        // 分别对剩下的两个区间进行递归排序
        sort(arr, low, i - 1);
        sort(arr, i + 1, high);
    }

    sort(arr, 0, arr.length - 1);
    return arr;
}

// 3、希尔排序(缩小增量排序)
// 特点：特点是利用增量，将数组分成一组组子序列，然后对子序列进行插入排序。
// 由于增量是从大到小，逐次递减，所以也称为缩小增量排序
const handleShellSort = (arr) => {
    const swap = (a, b) => {
        const tmp = arr[a];
        arr[a] = arr[b];
        arr[b] = tmp;
    }
    // 分组规则 gap/2 递减
    for (let gap = Math.floor(arr.length / 2); gap > 0; gap = Math.floor(gap / 2)) {
        for (let i = gap; i < arr.length; i++) {
            let j = i;
            // 分组内数字，执行插入排序，
            // 当下标大的数字，小于 下标小的数字，进行交互
            // 这里注意，分组内的数字，并不是一次性比较完，需要i逐步递增，囊括下个分组内数字
            while (j - gap >= 0 && arr[j] < arr[j - gap]) {
                swap(j, j - gap);
                j = j - gap;
            }
        }
    }

    return arr;


}

// 4、选择排序(order:desc(降序),asc(升序))
// 特点：选择排序是一种简单直观的排序算法，
// 它的工作原理是：
// 首先在未排序序列中找到最小（大）元素，存放到排序序列的起始位置，
// 然后，再从剩余未排序元素中继续寻找最小（大）元素，
// 然后放到已排序序列的末尾。
// 以此类推，直到所有元素均排序完毕。
const handleSelectionSort = (arr, order = 'asc') => {
    const len = arr.length;
    let compareFunc;

    if (order === 'asc') {
        compareFunc = (a, b) => a < b; // 升序比较函数
    } else if (order === 'desc') {
        compareFunc = (a, b) => a > b; // 降序比较函数
    } else {
        throw new Error('Invalid order specified. Use "asc" for ascending or "desc" for descending.');
    }

    for (let i = 0; i < len - 1; i++) {
        let minMaxIndex = i; // 根据order，这个可以是最小或最大值的索引
        for (let j = i + 1; j < len; j++) {
            if (compareFunc(arr[j], arr[minMaxIndex])) {
                minMaxIndex = j; // 保存最小或最大数的下标
            }
        }

        // 交换找到的最小或最大元素与当前位置i的元素
        const tmp = arr[i];
        arr[i] = arr[minMaxIndex];
        arr[minMaxIndex] = tmp;
    }

    return arr;
};

// 5、归并排序 
// 特点：归并排序，利用分治思想，将大的数组，分解为小数组，直至单个元素。
// 然后，使用选择排序的方式，对分拆的小数组，进行回溯，并有序合并，直至合并为一个大的数组。
const handleMergeSort = (arr) => {
    // sort方法，进行递归
    const sort = (arr, left, right) => {

        // 当left !== right时，证明还没分拆到最小元素
        if (left < right) {
            // 取中间值，分拆为两个小的数组
            const mid = Math.floor((left + right) / 2);
            const leftArr = sort(arr, left, mid);
            const rightArr = sort(arr, mid + 1, right);
            // 递归合并
            return merge(leftArr, rightArr)
        }

        // left == right, 已经是最小元素，直接返回即可
        return left >= 0 ? [arr[left]] : [];
    }

    // 合并两个有序数组
    const merge = (leftArr, rightArr) => {
        let left = 0;
        let right = 0;
        const tmp = [];

        // 使用双指针，对两个数组进行扫描
        while (left < leftArr.length && right < rightArr.length) {
            if (leftArr[left] <= rightArr[right]) {
                tmp.push(leftArr[left++]);
            } else {
                tmp.push(rightArr[right++]);
            }
        }

        // 合并剩下的内容
        if (left < leftArr.length) {
            while (left < leftArr.length) {
                tmp.push(leftArr[left++]);
            }
        }

        if (right < rightArr.length) {
            while (right < rightArr.length) {
                tmp.push(rightArr[right++]);
            }
        }

        return tmp;
    }

    return sort(arr, 0, arr.length - 1); // 注意右区间是arr.length - 1



}

// 6、插入排序(order:desc(降序),asc(升序))
// 特点：数组的第二个元素开始迭代，将该元素与之前的元素进行比较，并找到它应该插入的位置，
// 然后将其插入到该位置，以此类推，直到整个数组排序完成。
const handleInsertionSort = (arr, order = 'asc') => {
    const len = arr.length;
    const isAscending = order === 'asc';

    // 从第二个元素开始，因为第一个元素默认是有序的
    for (let i = 1; i < len; i++) {
        let current = arr[i]; // 当前要插入的元素
        let preIndex = i - 1; // 已排序部分的最后一个元素的索引

        // 在已排序部分中找到当前元素的正确位置，并为其腾出空间
        while (preIndex >= 0 && (isAscending ? arr[preIndex] > current : arr[preIndex] < current)) {
            arr[preIndex + 1] = arr[preIndex]; // 根据顺序向后或向前移动元素
            preIndex--;
        }

        // 将当前元素插入到正确位置
        arr[preIndex + 1] = current;
    }
    return arr;
}

// 7、堆排序
// 8、计数排序
// 9、桶排序
// 10、基数排序

module.exports = {
    handleBubbleSort,//冒泡排序
    handleQuickSort,//快速排序
    handleShellSort,//希尔排序
    handleSelectionSort,//选择排序
    handleMergeSort,//归并排序
    handleInsertionSort,//插入排序
}