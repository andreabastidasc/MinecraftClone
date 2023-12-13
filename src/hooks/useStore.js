import { nanoid } from 'nanoid';
import { create } from 'zustand';

const getLocalStorage = (key) => JSON.parse(window.localStorage.getItem(key));
const setLocalStorage = (key, value) => JSON.parse(window.localStorage.getItem(key, JSON.stringify(value)));


export const useStore = create(set => ({
    texture: 'dirt',
    cubes: getLocalStorage('cubes') || 
    [{
        id: nanoid(),
        pos: [1, 1, 1],
        texture: 'dirt'
    }],
    addCube: (x, y, z) => {
        set(state => ({
            cubes: [...state.cubes, {
                id: nanoid(),
                texture: state.texture,
                pos: [x, y, z]
            }]
        }))
    },
    removeCube: (id) => {
        set(state => ({
            cubes: state.cubes.filter(cube => cube.id !== id)
        }))
    },
    setTexture: (texture) => {
        set(() => ({ texture }))
    },
    saveWorld: () => {
        set((state) => {
            setLocalStorage('cubes', state.cubes);
        })
    },
    resetWorld: () => {
        set(() => ({
            cubes: []
        }))
    }
}))