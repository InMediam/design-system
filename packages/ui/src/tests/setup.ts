import '@testing-library/jest-dom/vitest'

import { cleanup } from '@testing-library/react'
import { afterEach } from 'vitest'

// Sem `globals: true` no Vitest, o Testing Library não registra o cleanup
// sozinho e os renders vazam de um teste para o outro.
afterEach(() => {
  cleanup()
})
