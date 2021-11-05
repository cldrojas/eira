<script>
    let content, category, intensity = 1;

    const addEntry = () => {
    const entry = {    
      content,
      category,
      intensity,
    };
    console.log('create entry: ', entry);
    //createEntry(entry);
  };
</script>

<div class="NewEntry">
    <div class="NewEntry-content">
      <h3>¿Cómo te sientes?</h3>
      <select name="category" id="category" bind:value={category}>
        <option value="">Selecciona una emoción</option>
        <option value="Felicidad">Felicidad</option>
        <option value="Tristeza">Tristeza</option>
        <option value="Disgusto">Disgusto</option>
        <option value="Ira">Ira</option>
        <option value="Miedo">Miedo</option>
        <option value="Sorpresa">Sorpresa</option>
      </select>
      <div class="intensity">
        <input
          type="range"
          name="intensity"
          id="intensity"
          min="1"
          max="10"
          bind:value={intensity}
        />
        <div class="text">
          <label for="intensity">Indica la intensidad</label>
          <span>{intensity}/10</span>
        </div>
      </div>
      <textarea
        name="content"
        id="content"
        cols="30"
        rows="10"
        bind:value={content}
      />
      <button on:click={addEntry}>Guardar</button>
    </div>
  </div>
  
  <style>
    .NewEntry{
      width: 300px;
      height: 478px;
      border: solid 1px #ccc;
      margin: 0 auto;    
    }
    input[type="range"] {      
      background-color: #00c48c;
    }
   /*  input[type="range"] {
    height: 6px;
    -webkit-appearance: none;
    background-color: #00c48c;
    border-radius: 8px;
    outline: none;
  } */
  input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 16px;
    width: 16px;
    background-color: red;
    border-radius: 50%;    
  }
  .intensity {
    margin-top: 45px;
    height: 36px;
    display: flex;
    flex-direction: column;
    font-size: 12px;
  }
  .text {
    display: flex;
    margin-top: 8px;
    justify-content: space-between;
  }
  textarea {
    resize: none;
    margin-top: 45px;
    border-radius: 8px;
    min-height: 150px;
  }
  button {
    background-color: #6979f8;
    color: white;
    border-radius: 4px;
    padding: 15px;
    margin-top: 45px;
    height: 54px;
    border: none;
  }

    

  </style>
  