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
          title="Usuários"
        >
          <v-btn
            color="grey darken-2"
            to="/cadastrarUsuario"
          >
            <v-icon
              left
              color="light-green accent-4"
            >mdi-plus-circle</v-icon>
            Cadastrar
          </v-btn>
          <v-spacer/>
          <v-data-table
            :headers="headers"
            :items="usuarios"
            :footer-props="{
              showFirstLastPage: true,
              itemsPerPageText: 'Qtd por Página'
            }"
            sort-by="nome"
            class="elevation-1"
          >

            <template v-slot:item.edit="{ item }">
              <v-btn
                color="grey darken-2"
                @click="getUsuarioEditar(item)"
              >
                <v-icon
                  left
                  color="cyan accent-4"
                >mdi-pencil-circle</v-icon>
                Editar
              </v-btn>
            </template>

            <template v-slot:item.delete="{ item }">
              <v-btn
                color="grey darken-2"
                @click="openModalDelete(item.nome, item.id)"
              >
                <v-icon
                  left
                  color="red accent-2"
                >mdi-delete-circle</v-icon>
                Excluir
              </v-btn>
            </template>

            <template v-slot:no-data>
              <v-alert
                :value="true"
                color="error"
                icon="mdi-alert"
              >TEXTO!</v-alert>
            </template>
          </v-data-table>
        </material-card>

        <v-dialog
          v-model="modalDelete"
          max-width="350"
        >
          <v-card>
            <v-card-title class="headline">Deseja realmente excluir o usuário?</v-card-title>

            <v-card-text>
              O Usuário {{ nomeUsuario }} será excluido permanentemente do sistema!
            </v-card-text>

            <v-card-actions>
              <div class="flex-grow-1"/>

              <v-btn
                color="red darken-1"
                text
                @click="modalDelete = false"
              >
                Cancelar
              </v-btn>

              <v-btn
                color="green darken-1"
                text
                @click="deletarUsuario(idUsuario)"
              >
                Confirmar
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  data () {
    return {
      nomeUsuario: '',
      idUsuario: '',
      modalDelete: false,
      textoPaginacao: 'Qtd por Página',
      headers: [
        { text: 'Nome', align: 'left', value: 'nome' },
        { text: 'Login', align: 'left', value: 'login' },
        { text: 'Editar', align: 'center', value: 'edit', sortable: false },
        { text: 'Excluir', align: 'center', value: 'delete', sortable: false }
      ]
    }
  },
  computed: {
    ...mapState({
      usuarios: state => state.usuarios.all.items
    })
  },
  created () {
    this.getAllUsuarios()
  },
  methods: {
    ...mapActions('usuarios', {
      getAllUsuarios: 'getAll',
      deleteUsuario: 'delete'
    }),
    ...mapActions('editUsuario', {
      getUsuarioEditar: 'getUsuarioEdit'
    }),
    openModalDelete (nome, id) {
      this.nomeUsuario = nome
      this.idUsuario = id
      this.modalDelete = true
    },
    deletarUsuario (id) {
      this.deleteUsuario(id)
      this.modalDelete = false
    }
  }
}
</script>
