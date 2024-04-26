<script lang="ts">
    // Obtiene la hora actual
    const now = new Date();
    const hour = now.getHours();
    let greeting = "";

    // Determina el saludo basado en la hora del día
    if (hour >= 6 && hour < 12) {
        greeting = "Buenos Días";
    } else if (hour >= 12 && hour < 20) {
        greeting = "Buenas Tardes";
    } else {
        greeting = "Buenas Noches";
    }
</script>

<h1 class="text-3xl font-bold">{greeting}</h1>
