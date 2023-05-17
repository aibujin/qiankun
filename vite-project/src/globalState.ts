import { initGlobalState } from 'qiankun';
export function globalState() {
    const { onGlobalStateChange, setGlobalState, offGlobalStateChange } = initGlobalState({
        user: 'init-qiankun'
    })

    onGlobalStateChange((value, prev) =>
        console.log('[onGlobalStateChange - master]:', value, prev)
    )

    setGlobalState({
        user: 'vite-project'
    })
    offGlobalStateChange();
}