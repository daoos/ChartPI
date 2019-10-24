<template>
  <v-container
    fill-height
    fluid
    grid-list-xl
  >
    <v-layout wrap>
      <v-flex
        xl12
        lg12
        md12
        sm12
        xs12
      >
        <material-card
          color="grey darken-2"
          title="Cadastrar vendedor"
        >
          <v-form
            ref="formCadastro"
            v-model="valid"
            lazy-validation
          >
            <v-text-field
              v-model="vendedor.nomeVendedor"
              :rules="nomeRules"
              label="Nome"
              required
            />
            <v-text-field
              v-model="vendedor.codigoVendedor"
              :rules="codigoRules"
              label="Código"
              required
            />
            <v-file-input label="Imagem"/>
            <v-btn
              :disabled="!valid"
              color="success"
              class="mr-4"
              @click="handleSubmit"
            >
              Cadastrar
            </v-btn>
            <v-btn
              color="error"
              class="mr-4"
              to="/vendedores"
            >
              Cancelar
            </v-btn>
          </v-form>
        </material-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      valid: true,
      vendedor: {
        nomeVendedor: '',
        codigoVendedor: '',
        imagemVendedor: ''
      },
      nomeRules: [
        v => !!v || 'O campo Nome é obrigatório'
      ],
      codigoRules: [
        v => !!v || 'O campo Login é obrigatório'
      ]
    }
  },
  computed: {},
  created () {},
  methods: {
    ...mapActions('vendedores', {
      register: 'register'
    }),
    handleSubmit () {
      if (this.$refs.formCadastro.validate()) {
        console.log('Usuario a ser cadastrado: ' + JSON.stringify(this.vendedor))
        this.register(this.vendedor)
        this.$refs.formCadastro.reset()
      }
    }
  }
}
</script>
