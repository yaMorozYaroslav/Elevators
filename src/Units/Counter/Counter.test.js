import {CounterState} from './CounterState'
import {act, renderHook} from '@testing-library/react'

describe('State Actions', () => {
	it('increments count by 1', () => {
		const {result} = renderHook(CounterState)
		act(() => { result.current.increment() })
		expect(result.current.state.count).toBe(1)
		})
	it('adds the word on decrement', () => {
		const {result} = renderHook(CounterState)
		act(() => { result.current.decrement() })
		expect(result.current.state).toBe({word:'decrement'})
		})
	})