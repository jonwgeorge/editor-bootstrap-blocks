editor.block("alert", {
  label: "Alert",
  icon: "alert",
  props: {
    content: String,
    attrs: [Array, Object],
  },
  computed: {
    fields() {
      return {
        css: {
          label: this.$t("editor.blocks.image.css.label"),
          type: "select",
          options: [
            { text: "Primary", value: "alert alert-primary" },
            { text: "Secondary", value: "alert alert-secondary" },
            { text: "Success", value: "alert alert-success" },
            { text: "Danger", value: "alert alert-danger" },
            { text: "Warning", value: "alert alert-warning" },
            { text: "Info", value: "alert alert-info" },
            { text: "Light", value: "alert alert-light" },
            { text: "Dark", value: "alert alert-dark" },
          ],
          icon: "code",
        },
      };
    },
  },
  methods: {
    focus(cursor) {
      this.$refs.input.focus(cursor);
    },
    onBack(event) {
      this.$emit("back", event);
    },
    onCheck() {
      this.$emit("input", {
        attrs: {
          done: !this.attrs.done,
        },
      });
    },
    onInput(html) {
      this.$emit("input", {
        content: html,
      });
    },
    onNext(cursor) {
      this.$emit("next", cursor);
    },
    onPrev(cursor) {
      this.$emit("prev", cursor);
    },
    onSplit(data) {
      this.$emit("split", data);
    },
    saveSettings() {
      this.$refs.settings.close();
      this.input(this.attrs);
    },
    input(data) {
      this.$emit("input", {
        attrs: {
          ...this.attrs,
          ...data,
        },
      });
    },
    menu() {
      return [
        {
          icon: "cog",
          label: "Alert Settings",
          click: this.$refs.settings.open,
        },
      ];
    },
  },
  template: `
    <p>
      <k-editable
        ref="input"
        :class="attrs.css"
        :content="content"
        @input="onInput"
        @back="onBack"]
        @input="onInput"
        @next="onNext"
        @prev="onPrev"
        @split="onSplit"
      />
      <k-dialog ref="settings" @submit="saveSettings" size="medium">
        <k-form :fields="fields" v-model="attrs" @submit="saveSettings" />
      </k-dialog>
    </p>
  `,
});
