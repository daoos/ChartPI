import { vendedorService } from '../../../_services'
import { router } from '../../../_helpers'

export default {
  getAll ({ commit }) {
    console.log('aqui store')
    commit('getAllRequest')
    vendedorService.getAll()
      .then(
        vendedores => commit('getAllSuccess', vendedores),
        error => commit('getAllFailure', error)
      )
  },
  register ({ dispatch, commit }, vendedor) {
    commit('registerRequest', vendedor)
    vendedorService.register(vendedor)
      .then(
        vendedor => {
          commit('registerSuccess', vendedor)
          router.push('/vendedores')
          setTimeout(() => {
            dispatch('alert/success', 'Registration successful', { root: true })
            commit('getAllRequest')
            vendedorService.getAll()
              .then(
                vendedores => commit('getAllSuccess', vendedores),
                error => commit('getAllFailure', error)
              )
          })
        },
        error => {
          commit('registerFailure', error)
          dispatch('alert/error', error, { root: true })
        }
      )
  },
  delete ({ dispatch, commit }, id) {
    commit('deleteRequest', id)
    vendedorService.delete(id)
      .then(
        vendedor => {
          commit('deleteSuccess', vendedor)
          setTimeout(() => {
            dispatch('alert/success', 'Deleting successful', { root: true })
            commit('getAllRequest')
            vendedorService.getAll()
              .then(
                vendedores => commit('getAllSuccess', vendedores),
                error => commit('getAllFailure', error)
              )
          })
        },
        error => {
          commit('deleteFailure', error)
          dispatch('alert/error', error, { root: true })
        }
      )
  }
}
