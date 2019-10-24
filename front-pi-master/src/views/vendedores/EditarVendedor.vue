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
              @click="handleSubmit()"
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
        idVendedor: this.$store.state.editVendedor.vendedorEdit.idVendedor,
        nomeVendedor: this.$store.state.editVendedor.vendedorEdit.nomeVendedor,
        codigoVendedor: this.$store.state.editVendedor.vendedorEdit.codigoVendedor,
        imagemVendedor: this.$store.state.editVendedor.vendedorEdit.imagemVendedor
      },
      nomeRules: [
        v => !!v || 'O campo Nome é obrigatório'
      ],
      codigoRules: [
        v => !!v || 'O campo Login é obrigatório'
      ]
    }
  },
  computed: {
  },
  created () {
  },
  methods: {
    ...mapActions('editVendedor', {
      update: 'update'
    }),
    handleSubmit () {
      if (this.$refs.formCadastro.validate()) {
        console.log(JSON.stringify(this.vendedor))
        this.update(this.vendedor).then(
          this.snackbar = true
        )
      }
    }
  }
}
</script>
