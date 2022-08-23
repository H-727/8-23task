// 延迟3秒打印
function sleep() {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            resolve()
        }, 3000)
    })
}
async function main() {
    await sleep()
    console.log('你好');
}

main()


