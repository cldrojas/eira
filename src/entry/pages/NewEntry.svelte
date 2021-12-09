<script>
  let content,
    category,
    intensity = 0;
  let color = "linear-gradient(90deg, #4CAF50 60%, #f2f2f2 60%)";
  const paint = () => {
    color = `linear-gradient(90deg, #4CAF50 ${intensity}0%, #f2f2f2 ${intensity}0%)`;
    document.getElementById("intensity").style.background = color;
  };
  const addEntry = () => {
    const entry = {
      content,
      category,
      intensity,
    };
    console.log("create entry: ", entry);
    //createEntry(entry);
  };
</script>

<div class="NewEntry">
  <div class="NewEntry-content">
    <h3 class="title">¿Cómo te sientes?</h3>
    <select
      class="dropdown"
      name="category"
      id="category"
      bind:value={category}
    >
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
        class="slider"
        type="range"
        name="intensity"
        id="intensity"
        min="0"
        max="10"
        bind:value={intensity}
        on:input={paint}
      />
      <div class="intensity-content">
        <label for="intensity">Indica la intensidad</label>
        <span>{intensity}/10</span>
      </div>
    </div>
    <textarea
      class="content-text"
      name="content"
      id="content"
      cols="30"
      rows="10"
      bind:value={content}
    />
    <button class="save-btn" on:click={addEntry}>Guardar</button>
  </div>
</div>

<style>
  .NewEntry {
    width: 300px;
    height: 478px;
    margin: 0 auto;
  }
  .title {
    text-align: left;
    font-size: 1.15em;
  }
  .dropdown {
    width: 100%;
    height: 45px;
    border-radius: 8px;
    padding-left: 16px;
  }
  .dropdown:focus {
    outline: none;
  }
  .intensity {
    margin-top: 45px;
    height: 36px;
    display: flex;
    flex-direction: column;
    font-size: 12px;
  }
  .slider {
    -webkit-appearance: none;
    border-radius: 10px;
    width: 100%;
    height: 8px;
    background: linear-gradient(90deg, #4caf50 0%, #f2f2f2 0%);
  }
  .slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #4caf50;
    cursor: pointer;
  }
  .slider::-moz-range-thumb {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #4caf50;
    cursor: pointer;
  }
  .intensity-content {
    display: flex;
    padding: 3px 8px 0 8px;
    justify-content: space-between;
  }
  .content-text {
    resize: none;
    margin-top: 45px;
    border-radius: 8px;
    min-height: 150px;
  }
  .save-btn {
    background-color: #6979f8;
    color: white;
    border-radius: 4px;
    padding: 15px;
    margin-top: 45px;
    height: 54px;
    border: none;
  }
</style>
