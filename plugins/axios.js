export default function ({
  $axios,
  store
}) {
  $axios.onError((error) => {
    if (error.response.status === 422) {
      store.dispatch('validation/setErrors', error.response.data.errors)
    }

    if (error.response.status === 400) {
      store.dispatch('validation/setErrors', error.response.data)
    }
    return Promise.reject(error)
  })

  $axios.onRequest((config) => {
    store.dispatch('validation/clearErrors')
    config.headers.common['X-Authorization'] = 'rDjuAubKSzPHklLWL8GeOLDXK3kR4qipssMsFYMx4e30PYL6Ok5BCS6aA3nrNd33'
  })
}
