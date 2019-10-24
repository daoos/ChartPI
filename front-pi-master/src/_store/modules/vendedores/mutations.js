export default {
  getAllRequest (state) {
    state.all = { loading: true }
  },
  getAllSuccess (state, vendedores) {
    state.all = { items: vendedores }
  },
  getAllFailure (state, error) {
    state.all = { error }
  },
  registerRequest (state, vendedor) {
    state.status = { registering: true }
  },
  registerSuccess (state, vendedor) {
    state.status = { vendedor }
  },
  registerFailure (state, error) {
    state.status = { error }
  },
  deleteRequest (state, idVendedor) {
    state.all.items = state.all.items.map(vendedor =>
      vendedor.idVendedor === idVendedor
        ? { ...vendedor, deleting: true }
        : vendedor
    )
  },
  deleteSuccess (state, vendedor) {
    state.status = { vendedor }
  },
  deleteFailure (state, error) {
    state.status = { error }
  }
}
